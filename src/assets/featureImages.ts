import dataViewer from "./GettingStarted/data-viewer.webp";
import download from "./GettingStarted/download.webp";
import drawShape from "./GettingStarted/draw-shape.webp";
import grazingWildfire from "./GettingStarted/grazing-wildfire.webp";
import manager from "./GettingStarted/manager.webp";
import plantFunctional from "./GettingStarted/plant-functional.webp";
import rectangle from "./GettingStarted/rectangle.webp";
import timePeriod from "./GettingStarted/time-period.webp";
import fieldResearch from "./Home/field-research.webp";
import sagebrush from "./Home/sagebrush.webp";
import satellite from "./Home/satellite.webp";

export interface ImageAsset {
    src: string;
    width: number;
    height: number;
}

const screenshot = (src: string): ImageAsset => ({ src, width: 960, height: 960 });

// Keep dimensions alongside the asset so lazy loading can reserve its space.
export const gettingStartedImages = {
    dataViewer: screenshot(dataViewer),
    download: screenshot(download),
    drawShape: screenshot(drawShape),
    grazingWildfire: screenshot(grazingWildfire),
    manager: screenshot(manager),
    plantFunctional: screenshot(plantFunctional),
    rectangle: screenshot(rectangle),
    timePeriod: screenshot(timePeriod),
};

export const homeImages = {
    fieldResearch: { src: fieldResearch, width: 4608, height: 3072 },
    sagebrush: { src: sagebrush, width: 1500, height: 1125 },
    satellite: { src: satellite, width: 1440, height: 956 },
} satisfies Record<string, ImageAsset>;
