"use client";

import { Text, Button, Flex } from "@radix-ui/themes";
import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export type PaginationProps = {
  paramName?: string;
  totalPages: number;
  currentPage: number;
};

export function Pagination(props: PaginationProps) {
  const { paramName = "page", totalPages, currentPage } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryString = useCallback(
    (name: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  const toPage = (newPage: number) => {
    const pageNumber = newPage === 1 ? undefined : newPage.toString();
    const newParams = updateQueryString(paramName, pageNumber);

    router.push(`${pathname}?${newParams}` as Route);
  };

  return (
    <Flex justify="center" align="center" gap="4" p="8">
      {totalPages > 1 && (
        <Button color="gray" onClick={() => toPage(currentPage - 1)} disabled={currentPage === 1}>
          Back
        </Button>
      )}
      <Text>
        {currentPage} / {totalPages}
      </Text>
      {totalPages > 1 && (
        <Button color="gray" onClick={() => toPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </Button>
      )}
    </Flex>
  );
}
