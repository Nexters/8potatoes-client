import { useGetDestinationPath } from "#/query-hooks/location/query";
import { Polyline } from "react-naver-maps"

interface DestinationPathProps {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

export const DestinationPath = ({ startX, startY, endX, endY }: DestinationPathProps) => {
    
    const { data } = useGetDestinationPath({ startX, startY, endX, endY });

    return (
        <Polyline path={{}} />
    )
}