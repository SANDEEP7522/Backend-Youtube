 class ApiResponse {
    constructor(statusCode, fata, message = "Succes") {
      this.statusCode = statusCode
      this.data = data
      this.message = message
      this.success = statusCode < 400      
    }
 }
 export { ApiResponse }