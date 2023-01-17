export const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    if (![yourLeft, yourRight, friendsLeft, friendsRight].every(Number.isFinite)) {
        throw new Error('parameter provided must be a number')
    }

    return (
        (Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight))
        &&
        (Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight))
    );
}