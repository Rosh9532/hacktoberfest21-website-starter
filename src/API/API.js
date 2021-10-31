import axios from "axios";

const allreq = {
  getContestants: async (req, res) => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_URL}/contestants`);
  },
  addContestant: async (req) => {
    return await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/contestants`,
      req
    );
  },
  
};

export default allreq;
