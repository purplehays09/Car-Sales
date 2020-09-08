import {TOGGLE_FEATURE} from '../reducers'

export function toggleFeature(feature){
    return feature.id
}

export function updateFeatures(newFeature) {
  return {
    type: TOGGLE_FEATURE,
    payload: toggleFeature(newFeature)
  }
}