
const hiddenClassName = 'hidden'

const optionStates = {
    ZULRAH: 'divZulrahType',
    ZULRAH_SPOT: 'divZulrahSpot',
    MOVE: 'divPlayerSpot'
}

const zulrahTypes = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
    JAD_RANGED: 'jad_ranged',
    JAD_MAGE: 'jad_mage'
}

const zulrahSpots = {
    LEFT: 'left',
    MIDDLE: 'middle',
    TOP: 'top',
    RIGHT: 'right'
}

const playerSpots = {
    BOTTOM_LEFT: 'bottom_left',
    CORNER_LEFT: 'corner_left',
    MIDDLE: 'middle',
    CORNER_RIGHT: 'corner_right',
    BOTTOM_RIGHT: 'bottom_right'
}

/* Each object holds: 
[   pathOfImageOfPhase, 
    imageFlipped, 
    zulrahType, 
    zulrahLocation, 
    playerLocation
]
*/
const phases = {
    //RED - MIDDLE
    RED_BOTTOMLEFT_MIDDLE: [
        './images/red_bottom.png',
        false,
        zulrahTypes.RED,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_LEFT
    ],
    RED_BOTTOMRIGHT_MIDDLE: [
        './images/red_bottom.png',
        true,
        zulrahTypes.RED,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_RIGHT
    ],
    RED_CORNERLEFT_MIDDLE: [
        './images/red_corner.png',
        false,
        zulrahTypes.RED,
        zulrahSpots.MIDDLE,
        playerSpots.CORNER_LEFT
    ],
    RED_CORNERRIGHT_MIDDLE: [
        './images/red_corner.png',
        true,
        zulrahTypes.RED,
        zulrahSpots.MIDDLE,
        playerSpots.CORNER_RIGHT
    ],

    //GREEN - MIDDLE
    GREEN_BOTTOMLEFT_MIDDLE: [
        './images/green_bottom_middle.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_LEFT
    ],
    GREEN_BOTTOMRIGHT_MIDDLE: [
        './images/green_bottom_middle.png',
        true,
        zulrahTypes.GREEN,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_RIGHT
    ],
    GREEN_CORNERRIGHT_MIDDLE: [
        './images/green_corner_middle.png',
        true,
        zulrahTypes.GREEN,
        zulrahSpots.MIDDLE,
        playerSpots.CORNER_RIGHT
    ],

    //GREEN - TOP
    GREEN_CORNERRIGHT_TOP: [
        './images/green_corner_top.png',
        true,
        zulrahTypes.GREEN,
        zulrahSpots.TOP,
        playerSpots.CORNER_RIGHT
    ],
    GREEN_CORNERLEFT_TOP: [
        './images/green_corner_top.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.TOP,
        playerSpots.CORNER_LEFT
    ],
    GREEN_MIDDLE_TOP: [
        './images/green_top_top.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.TOP,
        playerSpots.MIDDLE
    ],

    //GREEN - LEFT
    GREEN_CORNERLEFT_LEFT: [
        './images/green_corner_left.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.LEFT,
        playerSpots.CORNER_LEFT
    ],
    GREEN_BOTTOMLEFT_LEFT: [
        './images/green_bottom_left.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.LEFT,
        playerSpots.BOTTOM_LEFT
    ],

    //GREEN - RIGHT
    GREEN_CORNERRIGHT_RIGHT: [
        './images/green_corner_left.png',
        true,
        zulrahTypes.GREEN,
        zulrahSpots.RIGHT,
        playerSpots.CORNER_RIGHT
    ],
    GREEN_BOTTOMRIGHT_RIGHT: [
        './images/green_bottom_right_ranged.png',
        false,
        zulrahTypes.JAD_RANGED,
        zulrahSpots.RIGHT,
        playerSpots.BOTTOM_RIGHT
    ],

    //BLUE - MIDDLE
    BLUE_CORNERRIGHT_MIDDLE: [
        './images/blue_corner_middle.png',
        true,
        zulrahTypes.BLUE,
        zulrahSpots.MIDDLE,
        playerSpots.CORNER_RIGHT
    ],
    BLUE_BOTTOMLEFT_MIDDLE: [
        './images/blue_bottom_middle.png',
        false,
        zulrahTypes.BLUE,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_LEFT
    ],
    BLUE_BOTTOMLEFT_MIDDLE_PRAY: [
        './images/blue_bottom_middle_mage.png',
        false,
        zulrahTypes.JAD_MAGE,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_LEFT
    ],

    //BLUE - TOP
    BLUE_CORNERRIGHT_TOP: [
        './images/blue_top_top.png',
        true,
        zulrahTypes.BLUE,
        zulrahSpots.TOP,
        playerSpots.CORNER_RIGHT
    ],

    //BLUE - LEFT
    BLUE_CORNERLEFT_LEFT: [
        './images/blue_corner_left.png',
        false,
        zulrahTypes.BLUE,
        zulrahSpots.LEFT,
        playerSpots.CORNER_LEFT
    ],
    BLUE_BOTTOMLEFT_LEFT: [
        './images/blue_bottom_left.png',
        false,
        zulrahTypes.BLUE,
        zulrahSpots.LEFT,
        playerSpots.BOTTOM_LEFT
    ],

    //BLUE - RIGHT
    BLUE_CORNERRIGHT_RIGHT: [
        './images/blue_corner_left.png',
        true,
        zulrahTypes.BLUE,
        zulrahSpots.RIGHT,
        playerSpots.CORNER_RIGHT
    ]
}

const rotations = {
    ROTATION_A: [
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.RED_BOTTOMLEFT_MIDDLE,
        phases.BLUE_CORNERRIGHT_MIDDLE,
        phases.GREEN_CORNERRIGHT_TOP,
        phases.RED_CORNERRIGHT_MIDDLE,
        phases.BLUE_CORNERRIGHT_RIGHT,
        phases.GREEN_CORNERLEFT_TOP,
        phases.BLUE_CORNERRIGHT_TOP,
        phases.GREEN_BOTTOMRIGHT_RIGHT,
        phases.RED_BOTTOMRIGHT_MIDDLE,
        phases.GREEN_BOTTOMRIGHT_MIDDLE
    ],
    ROTATION_B: [
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.RED_BOTTOMLEFT_MIDDLE,
        phases.BLUE_CORNERRIGHT_MIDDLE,
        phases.GREEN_CORNERRIGHT_RIGHT,
        phases.BLUE_CORNERRIGHT_TOP,
        phases.RED_CORNERLEFT_MIDDLE,
        phases.GREEN_CORNERLEFT_LEFT,
        phases.BLUE_CORNERRIGHT_TOP,
        phases.GREEN_BOTTOMRIGHT_RIGHT,
        phases.RED_BOTTOMRIGHT_MIDDLE,
        phases.GREEN_BOTTOMRIGHT_MIDDLE
    ],
    ROTATION_C: [
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.GREEN_BOTTOMLEFT_LEFT,
        phases.RED_BOTTOMRIGHT_MIDDLE,
        phases.BLUE_CORNERRIGHT_RIGHT,
        phases.GREEN_CORNERRIGHT_TOP,
        phases.BLUE_CORNERLEFT_LEFT,
        phases.GREEN_CORNERRIGHT_MIDDLE,
        phases.GREEN_CORNERRIGHT_RIGHT,
        phases.BLUE_BOTTOMLEFT_MIDDLE,
        phases.BLUE_BOTTOMLEFT_MIDDLE_PRAY,
        phases.BLUE_BOTTOMLEFT_MIDDLE
    ],
    ROTATION_D: [
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.BLUE_BOTTOMLEFT_LEFT,
        phases.GREEN_CORNERRIGHT_TOP,
        phases.BLUE_CORNERRIGHT_RIGHT,
        phases.RED_CORNERLEFT_MIDDLE,
        phases.GREEN_CORNERLEFT_LEFT,
        phases.GREEN_CORNERRIGHT_TOP,
        phases.BLUE_CORNERRIGHT_RIGHT,
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.BLUE_BOTTOMLEFT_MIDDLE,
        phases.BLUE_BOTTOMLEFT_MIDDLE_PRAY,
        phases.BLUE_BOTTOMLEFT_MIDDLE
    ],
}

//Holds the options the user selected as values for enums
let chosenOptions = {
    ZULRAH: '',
    ZULRAH_SPOT: '',
    MOVE: ''
}

let optionState = optionStates.ZULRAH

let currentRotation
let currentPhase
let currentPhaseCounter


//Changes the state of the option selectors to know which to show and which to store
const moveToNextOption = (id) => {
    if (optionState == optionStates.ZULRAH) {
        optionState = optionStates.ZULRAH_SPOT
        chosenOptions.ZULRAH = id
        
        //To remove the "incorrect" message after a failed phase attempt
        document.querySelector('#incorrectMessage').classList.add(hiddenClassName)
    }
    else if (optionState == optionStates.ZULRAH_SPOT) {
        optionState = optionStates.MOVE
        chosenOptions.ZULRAH_SPOT = id
    }
    else if (optionState == optionStates.MOVE) {
        optionState = optionStates.ZULRAH
        chosenOptions.MOVE = id
    }
}

//Changes the current chosen option of the current option state
const changeCurrentOption = (parentId, id) => {
    if (parentId == optionStates.ZULRAH)
        chosenOptions.ZULRAH = id
    else if (parentId == optionStates.ZULRAH_SPOT)
        chosenOptions.ZULRAH_SPOT = id
    else if (parentId == optionStates.MOVE)
        chosenOptions.MOVE = id
}

//Updates the image of the current phase, adds the current phase to the progress panel, and updates the phase
const moveToNextPhase = () => {
    addPhaseToRotationProgressPanel()
    
    let currentPhaseDiv = document.querySelector('#divCurrentPhase')
    
    currentPhaseDiv.innerHTML = ''
    if (currentPhase[1] == true)
        currentPhaseDiv.innerHTML += '<img class="stackedImg flippedImg" src="' + currentPhase[0] + '">'
    else
        currentPhaseDiv.innerHTML += '<img class="stackedImg" src="' + currentPhase[0] + '">'
    
    currentPhaseCounter++

    //Check to see if the rotation is over - if so hide the options and allow the user to pick another rotation
    if (currentPhaseCounter >= currentRotation.length) {
        document.querySelector('#divOptionPicker').classList.add(hiddenClassName)
        document.querySelector('#divStartNextRotation').classList.remove(hiddenClassName)
    }

    currentPhase = currentRotation[currentPhaseCounter]

    //Rotations A and B need to be pushed one as they share the same path until the 4th phase
    //so they wouldn't know which one it is unless it's given to them
    if (currentRotation[1][2] == 'red' && currentPhaseCounter == 3)
        moveToNextPhase()
}

//Returns the children given the parent element and the selector text
const getElementChildren = (id, selector) => {
    const parentElement = document.querySelector('#' + id)
    return parentElement.querySelectorAll(selector)
}

//Sets the css of all options back to default 
const resetOptionSection = (id) => {
    getElementChildren(id, ':scope > img').forEach((element) => {
        element.classList = ''
        element.classList.add('borderedImg')

        if (element.attributes.flipped != undefined)
            element.classList.add('flippedImg')
    })
}

//Removes all previous listeners from the elements, then adds a new listener for the 'click' action
const addSectionEventListeners = (id) => {
    getElementChildren(id, ':scope > img').forEach((element) => {
        //Clone to remove the event listeners so we can add them again
        let newElement = element.cloneNode(true)
        element.parentNode.replaceChild(newElement, element)

        newElement.addEventListener('click', (e) => {
            resetOptionSection(id)
            pickOption(id, newElement)
        })
    })
    resetOptionSection(id)
}

//Resets all option sections back to their default state; bordered and unselected
const resetAll = (letter = null) => {
    resetOptionPanel()
    
    //Reset the progress panel
    document.querySelector('#divRotationProgress').innerHTML = ''

    document.querySelector('#divOptionPicker').classList.remove(hiddenClassName)
    document.querySelector('#divStartNextRotation').classList.add(hiddenClassName)

    //Reset the current data
    optionState = optionStates.ZULRAH

    if (letter)
        currentRotation = getRotationByLetter(letter)
    else
        currentRotation = rotations[Object.keys(rotations)[Math.floor(Math.random() * 4)]]
    
    currentPhaseCounter = 0
    currentPhase = currentRotation[currentPhaseCounter]

    moveToNextPhase()
    moveToNextPhase()
}

//Resets the option panel (hiding option sections) after choosing the options for the last phase
const resetOptionPanel = () => {
    let children = getElementChildren('divOptionPicker', ':scope > div')

    //Add the event listeners and reset the css for each child
    children.forEach((element) => addSectionEventListeners(element.id))
    
    //Add the css to each element of all but the first section of options
    Array.from(children).slice(1).forEach((element) => element.classList.add(hiddenClassName))

    //Reset the chosen options
    resetChosenOptions()
}

//Resets the chosen options
const resetChosenOptions = () => {
    chosenOptions.ZULRAH = ''
    chosenOptions.ZULRAH_SPOT = ''
    chosenOptions.MOVE = ''
}

//Once an option is selected, the selection will be saved and a new section of options will appear
const pickOption = (parentId, element) => {
    element.classList = ''
    element.classList.add('highlightedImg')

    if (element.attributes.flipped != undefined)
        element.classList.add('flippedImg')

    //If the latest option group had one of the options selected, show the next section
    if (parentId == optionState) {

        //If the player selects the prayer option - that is when it will tell the player whether it was right or not
        if (optionState === optionStates.MOVE) {
            moveToNextOption(element.id)

            //Check if the selections were correct compared to the next phase
            let correct = checkIfCorrectOptions()

            if (correct) {
                moveToNextPhase()
            } else {
                //Show warning that its incorrect and to check rotations page if needed
                document.querySelector('#incorrectMessage').classList.remove(hiddenClassName)
            }

            resetOptionPanel()
        }
        //If the player selected from any of the other option groups
        else {
            moveToNextOption(element.id)
            showOptionGroup()
        }
    }
    else {
        changeCurrentOption(parentId, element.id)
    }
}

//Removes the hidden css class from the newly unlocked group
const showOptionGroup = () => {
    const section = document.querySelector('#' + optionState)
    section.classList.remove(hiddenClassName)
}

//Validates the users selected options against the current phase info
const checkIfCorrectOptions = () => {
    if (optionState == optionStates.ZULRAH) {
        if (
            currentPhase[2] == chosenOptions.ZULRAH &&
            currentPhase[3] == chosenOptions.ZULRAH_SPOT &&
            currentPhase[4] == chosenOptions.MOVE
        )
            return true
    }
    return false
}

//Builds the page where the user can check all of the rotations out if they want to practice/are stuck
const buildRotationGuidePage = () => {
    Object.keys(rotations).forEach((rotation) => {
        let rotationDiv = document.querySelector('#' + rotation)
        
        rotationDiv.innerHTML = ''
        rotationDiv.innerHTML = '<h3>' + rotation.replace('ROTATION_', ' ') + '</h3>'
        
        rotations[rotation].forEach((phase) => {
            if (phase[1] == true)
                rotationDiv.innerHTML += '<img class="stackedImg flippedImg" src="' + phase[0] + '">'
            else
                rotationDiv.innerHTML += '<img class="stackedImg" src="' + phase[0] + '">'
        })
    })
}

//Adds the picture of the correctly guessed phase to the left progress panel
const addPhaseToRotationProgressPanel = () => {
    let progressPanel = document.querySelector('#divRotationProgress')
    
    if (currentPhase[1] == true)
        progressPanel.innerHTML += '<img class="stackedImg flippedImg" src="' + currentPhase[0] + '">'
    else
        progressPanel.innerHTML += '<img class="stackedImg" src="' + currentPhase[0] + '">'
}

const getRotationByLetter = (letter) => {
    if (letter == 'A')
        return rotations.ROTATION_A
    else if (letter == 'B')
        return rotations.ROTATION_B
    else if (letter == 'C')
        return rotations.ROTATION_C
    else if (letter == 'D')
        return rotations.ROTATION_D
}


/* ------------------------------------
    Adding event listeners
------------------------------------ */

//Top navigation 
document.querySelector('#btnSeeRotations').addEventListener("click", (e) => {
    //If the user wants to see the rotations page
    if (e.currentTarget.textContent == 'See Rotations') {
        document.getElementById('divRightPanel').classList.add(hiddenClassName)
        document.getElementById('divRightPanelRotations').classList.remove(hiddenClassName)

        e.currentTarget.textContent = 'Back to Trainer'
    }
    //If the user wants to see the training page
    else if (e.currentTarget.textContent == 'Back to Trainer') {
        document.getElementById('divRightPanelRotations').classList.add(hiddenClassName)
        document.getElementById('divRightPanel').classList.remove(hiddenClassName)

        e.currentTarget.textContent = 'See Rotations'
    }
})

//Reset button
document.querySelector('#btnReset').addEventListener('click', (e) => resetAll())
document.querySelector('#btnNextRotation').addEventListener('click', (e) => resetAll())

//Setup each rotation button to reset the boardf as well as force the rotation selected
let rotationButtons = ['A', 'B', 'C', 'D']

rotationButtons.forEach((letter) => {
    document.querySelector('#forceRotation' + letter).addEventListener('click', (e) => resetAll(letter))
})

//Start it all off
buildRotationGuidePage()
resetAll()
