/**
 * @param key 
 * @param value 
 */
export function setToLocalStorage<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error setting item to localStorage:", error);
    }
  }
  
  /**
   * @param key 
   * @returns
   */
  export function getFromLocalStorage<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return null;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  }
  