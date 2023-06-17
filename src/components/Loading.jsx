import React from 'react'
import { Stack, StackDivider, Skeleton } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        data-cy="loading_indicator"
      >
        <Skeleton
          height="40px"
          bg="green.500"
          color="white"
          fadeDuration={1}
        ></Skeleton>
        <Skeleton
        height='40px'
        fadeDuration={2}
        bg='blue.500'
        color='white'
      ></Skeleton>
      <Skeleton
        height='40px'
        fadeDuration={3}
        bg='blue.500'
        color='white'
      ></Skeleton>
        <Skeleton
        height='40px'
        fadeDuration={4}
        bg='blue.500'
        color='white'
      ></Skeleton>
      </Stack>
    </>
  )
}
