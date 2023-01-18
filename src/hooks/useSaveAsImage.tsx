import html2canvas from 'html2canvas';

export const useSaveAsImage = () => {
    const saveCalendarImage = async (element: HTMLElement, imageFileName = 'calendar') => {
        const html = document.getElementsByTagName('html')[0];
        const body = document.getElementsByTagName('body')[0];
        let htmlWidth = html.clientWidth;
        let bodyWidth = body.clientWidth;

        const newWidth = element.scrollWidth - element.clientWidth;

        if (newWidth > element.clientWidth) {
            htmlWidth += newWidth;
            bodyWidth += newWidth;
        }

        html.style.width = htmlWidth + 'px';
        body.style.width = bodyWidth + 'px';

        const canvas = await html2canvas(element);
        const image = canvas.toDataURL('image/png', 1.0);

        const link = document.createElement('a');
        link.download = `${imageFileName}.png`;
        link.href = image;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return { saveCalendarImage };
};
