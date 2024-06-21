import { contentful, graphql } from "~/graphql";
import { AllVideosPageQueryVariables as QueryVars } from "~/graphql";
import { notEmpty } from "~/utils/filters";

import { SearchParams } from "./page";

const AllVideosPageDocument = graphql(/* GraphQL */ `
  query AllVideosPage($limit: Int!, $skip: Int, $videoType: String) {
    videos: videoCollection(
      limit: $limit
      skip: $skip
      order: uploadDate_DESC
      where: { videoType: $videoType }
    ) {
      total
      items {
        ...VideoCardLink
      }
    }
  }
`);

export async function fetchAllVideosPageData(params: SearchParams) {
  const { currentPage, videoType, skip, limit } = parseParams(params);

  const data = await contentful.request(AllVideosPageDocument, { videoType, skip, limit });

  const videos = data.videos?.items.filter(notEmpty) ?? [];
  const category = videoType;
  const totalVideos = data.videos?.total;
  const totalPages = totalVideos ? Math.ceil(totalVideos / limit) : 0;

  return {
    videos,
    category,
    totalPages,
    currentPage,
  };
}

const parseParams = (searchParams: SearchParams): { currentPage: number } & QueryVars => {
  const { page, category } = searchParams;

  const limit = 18;
  let currentPage = 1;
  let videoType = null;
  let skip = null;

  const pageNumber = Number(page);

  if (pageNumber && pageNumber > 0) {
    currentPage = Math.trunc(pageNumber);
    skip = (currentPage - 1) * limit;
  }

  switch (category) {
    case "interviews":
      videoType = "Interview";
      break;
    case "songs":
      videoType = "Song";
      break;
    case "covers":
      videoType = "Cover";
      break;
    default:
      break;
  }

  return {
    currentPage,
    limit,
    skip,
    videoType,
  };
};
