export const addFeature = newFeature => {
    console.log(newFeature, "actions.js add feature payload")
    return { type: 'ADD_FEATURE', payload: newFeature};
    
}
export const removeFeature = feature => {
    return { type: "REMOVE_FEATURE", payload: feature}
}