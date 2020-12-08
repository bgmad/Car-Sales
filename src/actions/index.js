const ACTION = {
    ADD_FEATURE: "ADD_FEATURE",
    REMOVE_FEATURE: "REMOVE_FEATURE"
}

export const addFeature = featureId => {
    return {
        type: ACTION.ADD_FEATURE,
        payload: featureId
    }
}
export const removeFeature = featureId => {
    return {
        type: ACTION.REMOVE_FEATURE,
        payload: featureId
    }
}

export default ACTION;
