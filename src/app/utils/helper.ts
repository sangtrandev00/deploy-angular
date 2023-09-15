export class Helper {
  static getBaseUrl(): string {
    return 'http://localhost:3000';
  }

  static formatInputDate(inputDate: string): string {
    const parts = inputDate.split('/');
    const date = new Date(+parts[2], +parts[0] - 1, +parts[1]);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
