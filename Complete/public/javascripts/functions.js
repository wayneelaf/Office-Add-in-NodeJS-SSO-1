window.sharedState = "empty";

/**
 * Saves a string value to shared state with the task pane
 * @customfunction STOREVALUE
 * @param {string} value String to write to shared state with task pane.
 * @return {string} A success value
 */
function storeValue(sharedValue) {
    window.sharedState = sharedValue;
    return "value stored";
}
/**
 * Gets a string value from shared state with the task pane
 * @customfunction GETVALUE
 * @returns {string} String value of the shared state with task pane.
 */
function getValue() {
    return window.sharedState;
}
/**
 * Add two numbers
 * @customfunction 
 * @param {number} first First number
 * @param {number} second Second number
 * @returns {number} The sum of the two numbers.
 */
function add(first, second) {
    return first + second;
}

/**
 * Displays the current time once a second
 * @customfunction 
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
function clock(invocation) {
    const timer = setInterval(() => {
        const time = currentTime();
        invocation.setResult(time);
    }, 1000);

    invocation.onCanceled = () => {
        clearInterval(timer);
    };
}

/**
 * Returns the current time
 * @returns {string} String with the current time formatted for the current locale.
 */
function currentTime() {
    return new Date().toLocaleTimeString();
}

/**
 * Increments a value once a second.
 * @customfunction 
 * @param {number} incrementBy Amount to increment
 * @param {CustomFunctions.StreamingInvocation<number>} invocation
 */
function increment(incrementBy, invocation) {
    let result = 0;
    const timer = setInterval(() => {
        result += incrementBy;
        invocation.setResult(result);
    }, 1000);

    invocation.onCanceled = () => {
        clearInterval(timer);
    };
}

/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param {string} message String to write.
 * @returns String to write.
 */
function logMessage(message) {
    console.log(message);

    return message;
}
