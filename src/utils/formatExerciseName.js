export default function formatExerciseName(unformattedName) {
    if (unformattedName.includes("-")) {
      return unformattedName
        .split("-")
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
        .join(" ");
    }
    return unformattedName.charAt(0).toUpperCase() + unformattedName.slice(1);
  }

