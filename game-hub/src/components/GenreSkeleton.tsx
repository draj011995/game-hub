import { Box, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Box paddingY="5px">
      <HStack>
        <Skeleton height="35px" width="35px" paddingY="5px" borderRadius={8} />
        <SkeletonText noOfLines={1} height="5px" width="80px"></SkeletonText>
      </HStack>
    </Box>
  );
};

export default GenreSkeleton;
