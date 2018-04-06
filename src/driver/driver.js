import Driver from 'driver.js';
// const driver = new Driver({ allowClose: false });
   
const driver = new Driver({ 
    allowClose: false, 
});

// starts the driver
export const startDriver = () => {
    driver.start( 0 );
}

// define steps for driver
export const defineDriverSteps = ( steps ) => {
    driver.defineSteps( steps );
}

// handles next step for driver
export const handleNextStep = () => {
    if(driver.hasNextStep()) {
        driver.moveNext();

        const activeElement = driver.getHighlightedElement();
        activeElement.scrollManually();
    }
}

// create a step definition for the driver
export const createStepDefinition = ( formPopulation ) => {
    return Object.keys( formPopulation ).map( key => {
        return { element: `#${key}` };
    });
}

