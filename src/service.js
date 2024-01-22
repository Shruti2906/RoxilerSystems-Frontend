import axios from 'axios';

const baseURL = 'https://mern-transactionanalyzer.onrender.com';

export const getTransactions = async (month, searchText, currentPage) => {
    try {
      const response = await axios.get(`${baseURL}/getTransactions`, {
        params: {
          month,
          search: searchText,
          page: currentPage,
        },
      });
  
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  };
  
  export const getStatisticsData = async (month) => {
    try {
      const response = await axios.get(`${baseURL}/getstatistics`, {
        params: {
          month,
        },
      });
  
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  };
  
  export const getBarChartData = async (month) => {
    try {
      const response = await axios.get(`${baseURL}/getBarChartData`, {
        params: {
          month,
        },
      });
  
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  };












// class ApiService {
//     constructor() {
//       this.baseURL = 'http://localhost:3001'; 
//     }
  
// async getTransactions (month, searchText, currentPage) {
//     try{
//         const response = await fetch(`${this.baseURL}/transactions?month=${month}&search=${searchText}&page=${currentPage}`)
//         if (response.ok) {
//             const data = await response.json();
//             return data;
//         }
//     }catch(error){
//         console.log("error: ",error);
//         throw error;
//     }
// }
// async getStatisticsData(month) {
//     try{
//         const response = await fetch(`${this.baseURL}/getstatistics?month=${month}`)
//         if (response.ok) {
//             const data = await response.json();
//             return data;
//         }
//     }catch(error){
//         console.log("error: ",error);
//         throw error;
//     }
//   }
//   async getBarChartData(month) {
//     try{
//         const response = await fetch(`${this.baseURL}/getBarChartData?month=${month}`)
//         if (response.ok) {
//             const data = await response.json();
//             return data;
//         }
//     }catch(error){
//         console.log("error: ",error);
//         throw error;
//     }
//   }
// }
// const service = new ApiService(); 
// export default service;