export type KakaoMap = typeof window.kakao | null;

export type KakaoLatLng = { 
    latitude: number; 
    longitude: number;
};

export type xy = {
    x: number;
    y: number;
}

export type StatusText = "OK" | "ZERO_RESULT" | "ERROR";