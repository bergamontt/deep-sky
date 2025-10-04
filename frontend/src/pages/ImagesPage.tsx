import { Title, Text, Stack, Pagination, Flex } from "@mantine/core";
import PageWrapper from "../components/common/PageWrapper";
import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getImages } from "../services/ImageService";
import ImagePreview from "../components/images/ImagePreview";

function ImagesPage() {
    const [page, setPage] = useState<number>(1);
    const params = useMemo(() => (
        { page: page - 1 }), [page]
    );
    const {data : pages} = useFetch(
        getImages, [params],
    );
    return(
        <PageWrapper color='#111111ff'>
           <Stack gap="0.2em">
                <Title c="white">
                    Available Images
                </Title>
                <Text c='#c4c0c0ff'>
                    Browse hundreds of beautiful high-quality nebula images
                </Text>
           </Stack>
            <Flex p="1em" bdrs="10px" bg='#242424' h="100%">
                {pages &&
                    pages.content.map((image) => (
                        <ImagePreview
                            image={image} key={image.id}
                        />
                    ))}
            </Flex>
            <Pagination
                total={pages?.page.totalPages || 1}
                value={page}
                onChange={setPage}
                color="gray"
            />
        </PageWrapper>
    );
}

export default ImagesPage