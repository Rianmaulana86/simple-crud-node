const successResponse = (data) => {
    return {
      success: true,
      message: 'selamat anda success',
      data: data
    }
  }
  
  const errorResponse = (message) => {
    return {
      success: false,
      message: 'kau gagal',
      data: {}
    }
  }
  
  module.exports = {
    successResponse,
    errorResponse
  }