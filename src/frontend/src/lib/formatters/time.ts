export function formatTimestamp(timestamp: bigint): string {
  try {
    // Convert nanoseconds to milliseconds
    const milliseconds = Number(timestamp / 1_000_000n);
    const date = new Date(milliseconds);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Recently';
    }
    
    // Format as a readable date string
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch (error) {
    return 'Recently';
  }
}
