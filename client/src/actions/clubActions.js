/*
 * This file contains actions relating to manipulating club data. For more extensive documentation, check the 
 * APIDocumentation.md file.
 */

 /*
  * Wrapper for getting all clubs
  *
  */
async function getAllClubs() {
    const url = '/clubs/all'
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json text/plain, */*',
            'Content-Type': 'application/json'
        }
    })

    try {
        const response = await fetch(request)
        if (response.status === 200) {
            return await response.json()
        } else if (response.status === 401) { 
            return {'status': 401}
        } else {
            return []
        }
    } catch (error) {
        throw new Error(error)
    }
}

/*
 * Wrapper for adding a new club
 *
 */
async function createClub(name, clubInfo) {
    const url = '/clubs/create'
    const data = {
        name: name,
        clubInfo: clubInfo,
        execs: [],
        requested: [],
        members: []
    }

    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    try {
        const response = await fetch(request)
        return response
    } catch (error) {
        throw new Error(error);
    }

}

/*
 * Wrapper for getting a single club
 *
 */
async function getClub(id) {
    const url = `/clubs/get/${id}`
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json text/plain, */*',
            'Content-Type': 'application/json'
        }
    })

    try {
        const response = await fetch(request)
        if (response.status === 200) {
            return await response.json()    
        } else {
            return {"status": response.status}
        }
    } catch (error) {
        throw new Error(error)
    }
}

/*
 * Wrapper for updating club info
 *
 */
async function updateClub(id, attr, new_val) {
    const url = `/clubs/update/${id}`
    const data = {
        attr: attr,
        nVal: new_val
    }   

    const request = new Request(url, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })

    try {
        const response = await fetch(request)
        return response.status;
    } catch (error) {
        throw new Error(error)
    }
}

/*
 * Wrapper for updating club images
 *
 */
async function updateClubImage(id, attr, formData) {
    const url = `/clubs/updateImg/${id}/${attr}`
    const request = new Request(url, {
        method: 'PATCH',
        body: formData
    })

    try {
        const response = await fetch(request)
        return response.status
    } catch (error) {
        throw new Error(error)
    }
}

/*
 * Wrapper for updating club info
 *
 */
async function deleteClub(id) {
    const url = `/clubs/remove/${id}`
    const request = new Request(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json text/plain, */*',
            'Content-Type': 'application/json'
        }
    })

    try {
        const response = await fetch(request)
        return response.status
    } catch (error) {
        throw new Error(error)
    }
}

export {getAllClubs, createClub, getClub, updateClub, updateClubImage, deleteClub}
