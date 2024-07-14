/**
 * debounce 함수
 * @param callback 사용자 입력이 끝난 후 실행될 함수
 * @param wait 입력 대기 시간
 */
export function debounce<T extends () => void>(
    callback: T,
    wait: number = 500,
): () => void {
    let timeout: ReturnType<typeof setTimeout>;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, wait);
    };
}
