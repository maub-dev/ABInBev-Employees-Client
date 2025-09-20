import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:32779'
});

const successResult = (data) => {
    return { success: true, data };
};
const failResult = (error) => {
    return { success: false, title: error.message, message: error.data };
};

const EmployeeApi = {
    getAll: async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            const response = await api.get('employee/all', { headers: { Authorization: `Bearer ${accessToken}` } });

            return successResult(response.data);
        } catch (error) {
            console.log(error)
            alert(error.message);
            return failResult(error);
        }
    },
    get: async (id) => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            var response = await api.get(`employee?id=${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });

            return successResult(response.data);
        } catch (error) {
            console.log(error)
            alert(error.message);
            return failResult(error);
        }
    },
    post: async (data) => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            await api.post('employee', data, { headers: { Authorization: `Bearer ${accessToken}` } });

            return successResult();
        } catch (error) {
            console.log(error)
            alert(error.message);
            return failResult(error);
        }
    },
    put: async (data) => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            await api.put('employee', data, { headers: { Authorization: `Bearer ${accessToken}` } });

            return successResult();
        } catch (error) {
            console.log(error)
            alert(error.message);
            return failResult(error);
        }
    },
    delete: async (id) => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            await api.delete(`employee?id=${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });

            return successResult();
        } catch (error) {
            console.log(error)
            alert(error.message);
            return failResult(error);
        }
    }
}

const AuthenticationApi = {
    login: async (data) => {
        try {
            const response = await api.post('authentication', data);

            return successResult(response.data);
        } catch (error) {
            alert(error);
            return failResult(error);
        }
    }
};

const Api = { EmployeeApi, AuthenticationApi };

export default Api;