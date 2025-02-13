export enum ActionTypes {
    // Status
    LOADED = "LOADED",
    NOT_LOADED = "NOT_LOADED",
    IS_LOADING = "IS_LOADING",
    LOADING_FAILED = "LOADING_FAILED",

    // Fetch past launches
    FETCH_PAST_LAUNCH_LOADING = "FETCH_PAST_LAUNCH_LOADING",
    FETCH_PAST_LAUNCH = "FETCH_PAST_LAUNCH",
    FETCH_PAST_LAUNCH_SUCCESS = "FETCH_PAST_LAUNCH_SUCCESS",
    FETCH_PAST_LAUNCH_ERROR = "FETCH_PAST_LAUNCH_ERROR",

    FILTER_PAST_LAUNCH = "FILTER_PAST_LAUNCH",
};