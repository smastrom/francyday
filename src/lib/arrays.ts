import { getDayOfYear, getZonedDate } from './dates'

export function getTodaysItem<T>(arr: T[]) {
   const currentYear = getZonedDate().getFullYear()
   const shuffledArr = shuffleByNumber(arr, currentYear)

   const dayOfYear = getDayOfYear()
   const index = dayOfYear - 1

   if (index < 0 || index >= shuffledArr.length) {
      return shuffledArr[shuffledArr.length - 1] // Return the last item if index is out of range
   }

   return shuffledArr[index]
}

/**
 * Shuffles an array in a deterministic way using the given seed.
 *
 * @param arr The array to shuffle.
 * @param seed The seed used to create a deterministic random sequence.
 * @returns A new array with elements in a deterministic shuffled order.
 */
export function shuffleByNumber<T>(arr: T[], number: number): T[] {
   const result = [...arr]

   const rng = seededRandom(number)

   // Perform Fisher–Yates shuffle using the deterministic RNG
   for (let i = result.length - 1; i > 0; i--) {
      // Generate a pseudo-random index
      const j = Math.floor(rng() * (i + 1))

      // Swap elements
      ;[result[i], result[j]] = [result[j], result[i]]
   }

   return result
}

/**
 * Returns a pseudo-random generator function based on a numeric seed using a Linear Congruential Generator (LCG).
 *
 * @param seed A numeric value used as the seed.
 * @returns A function that, when called, returns a pseudo-random number between 0 and 1.
 */
function seededRandom(seed: number) {
   return () => {
      // LCG constants
      seed = (seed * 9301 + 49297) % 233280

      // Normalize the result to a float in [0, 1)
      return seed / 233280
   }
}
