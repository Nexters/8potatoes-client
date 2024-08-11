/**
 * debounce 함수
 * @param callback 사용자 입력이 끝난 후 실행될 함수
 * @param wait 입력 대기 시간
 */
export function debounce<T extends (...args: never[]) => void>(
    callback: T,
    wait: number = 500,
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), wait);
    };
}

/**
 * clipboard에 텍스트를 복사하는 함수
 * @param text 복사할 텍스트
 */
export async function handleCopyToClipboard(text: string) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
