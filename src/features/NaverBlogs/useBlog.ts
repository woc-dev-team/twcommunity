const useBlog = () => {
    const openPopup = (url: string) => window.open(url, url);
    
    return {
        openPopup
    }
}

export default useBlog;