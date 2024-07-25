/**
 * debounce 함수
 * @param callback 사용자 입력이 끝난 후 실행될 함수
 * @param wait 입력 대기 시간
 */
export function debounce<T extends (...args: unknown[]) => void>(
    callback: T,
    wait: number = 500,
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), wait);
    };
}
