import { Fetch_Mode } from "./Constant"

export const SetThemeMode = (data) => {
    return {
        type: Fetch_Mode,
        data: data,
    }
}