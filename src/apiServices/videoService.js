import * as httpRequest from '~/untils/request';

export const loadVideo = async (type, page = '1') => {
    try {
        const response = await httpRequest.get('videos', {
            params: {
                type,
                page,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
