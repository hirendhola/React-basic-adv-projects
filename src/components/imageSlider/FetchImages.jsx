const FetchImages = async (url, limit) => {
    try {
        const response = await fetch(`${url}limit=${limit}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch images: ${error.message}`);
    }
};

export default FetchImages;
