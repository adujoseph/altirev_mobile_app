import { fileUpload, getRequest, postRequest } from "./makeRequest";


export const sendReport = async (payload: any) => {
    const url = `/reports/submit-report`;
    return await postRequest(url, payload);
};

export const uploadReportFile = async (payload: any) => {
    const url = `/reports/file-upload`;
    return await fileUpload(url, payload);
};

export const fetchMyReports = async () => {
    const url = `/reports/me`;
    return await getRequest(url);
};