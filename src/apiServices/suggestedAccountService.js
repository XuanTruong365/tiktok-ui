import * as request from '~/untils/request';

export const suggestApi = async (page = '1', per_page) => {
    try {
        const response = await request.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
