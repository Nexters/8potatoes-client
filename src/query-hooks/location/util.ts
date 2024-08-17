export const getBoundingCoordinates = (coordinates: [number, number][]) => {
    const [latitudes, longitudes] = coordinates.reduce<[number[], number[]]>(
        ([lats, lngs], [currentLng, currentLat]) => [
            [...lats, currentLat],
            [...lngs, currentLng],
        ],
        [[], []],
    );

    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);

    const topLeft = [minLng, maxLat];
    const topRight = [maxLng, maxLat];
    const bottomLeft = [minLng, minLat];
    const bottomRight = [maxLng, minLat];

    return [topLeft, topRight, bottomLeft, bottomRight];
};