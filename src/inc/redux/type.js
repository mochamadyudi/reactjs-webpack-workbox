/**
 * @define - Constanst [ ROOT ]
 */
export const ROOT_API                       = 'https://cyberapi.witek.id'
export const HEADERS_APP_JSON = {
 headers:{
  "Content-Type":"application/json"
 }
}
// export const ROOT_API                       = 'http://localhost/GitLab/CoursesApi/public/'

/**
 * @define - Constants [ API URL TEAM ]
 * @type {string}
 */
export const API_GET_SINGLE_TEAM            = "/api/teams_edit_select/"
export const API_GET_TEAM_VIEW_PAGIN        = '/api/teams_view'
export const API_POST_TEAM_CREATE           = '/api/teams_create'
export const API_POST_TEAM_UPDATE           = '/api/teams_update'
export const API_GET_TEAM_ACTIVITY          = '/api/teams_edit_select/activity/'

/**
 * @define - Constants [ API URL ORGANIZATION ]
 * @type {string}
 */
export const API_POST_ORGANIZATION_CREATE   = "/api/organization_create"
export const API_POST_ORGANIZATION_UPDATE   = "/api/organization_update"


/**
 * @define - API [ TEAM ]
 */
export const API_MEMBER_IN_TEAM             = "/api/teams_members_view/" //@route - /api/teams_members_view/{{ ID_TEAM }}



/**
 * @define - Constants [ AUTH ]
 * @type {string}
 */
export const SET_ALERT                      = "SET_ALERT"
export const REMOVE_ALERT                   = "REMOVE_ALERT"

/**
 * @define - Constants [ AUTH ]
 * @type {string}
 */
export const IS_LOGIN                       = "IS_LOGIN"
export const IS_LOGIN_FAILED                = "IS_LOGIN_FAILED"
export const USER_LOADED                    = "USER_LOADED"
export const USER_LOADED_ERROR              = "USER_LOADED_ERROR"

/**
 * @define - Constants [ ORGANIZATION ]
 * @type {string}
 */
export const GET_ORGANIZATION               = "GET_ORGANIZATION"
export const GET_ORGANIZATION_ERROR         = "GET_ORGANIZATION_ERROR"
export const ADD_ORGANIZATION               = "ADD_ORGANIZATION"
export const ADD_ORGANIZATION_ERROR         = "ADD_ORGANIZATION_ERROR"
export const UPDATED_ORGANIZATION           = "UPDATED_ORGANIZATION"
export const UPDATED_ORGANIZATION_ERROR     = "UPDATED_ORGANIZATION_ERROR"
export const DELETED_ORGANIZATION           = "DELETED_ORGANIZATION"
export const DELETED_ORGANIZATION_ERROR     = "DELETED_ORGANIZATION_ERROR"

/**
 * @define - Constants [ TEAM ]
 * @type {string}
 */
export const ADD_MYTEAM                     = "ADD_MYTEAM"
export const ADD_MYTEAM_ERROR               = "ADD_MYTEAM_ERROR"
export const UPDATED_MYTEAM                 = "UPDATED_MYTEAM"
export const UPDATED_MYTEAM_ERROR           = "UPDATED_MYTEAM_ERROR"
export const GET_MYTEAM                     = "GET_MYTEAM"
export const GET_MYTEAM_ERROR               = "GET_MYTEAM_ERROR"
export const DELETED_MYTEAM                 = "DELETED_MYTEAM"
export const DELETED_MYTEAM_ERROR           = "DELETED_MYTEAM_ERROR"

// GET MEMBER IN TEAMS
export const GET_MEMBER_IN_TEAMS            = "GET_MEMBER_IN_TEAMS"
export const ERROR_MEMBER_IN_TEAMS          = "ERROR_MEMBER_IN_TEAMS"



/**
 * @define - Constants [ PROFILE ]
 * @type {string}
 */
export const PROFILE_ADDED                  = "PROFILE_ADDED"
export const PROFILE_UPDATED                = "PROFILE_UPDATED"
export const PROFILE_DELETED                = "PROFILE_DELETED"


export const GET_SINGLE_TEAM                = "GET_SINGLE_TEAM"
export const ERROR_GET_SINGLE_TEAM          = "ERROR_GET_SINGLE_TEAM"
export const GET_SINGLE_ACTIVITY            = "GET_SINGLE_ACTIVITY"
export const ERROR_GET_SINGLE_ACTIVITY      = "ERROR_GET_SINGLE_ACTIVITY"

/**
 * @define - Constants [ CSRF ]
 * @type {string}
 */
 export const C_KEY                          = "11070b1f-174a-4d77-80e9-b6ed5a37"
 export const C_METHOD                       = "AES-256-CBC"
 export const C_HMAC                         = "md5"
 export const C_HMAC_DIGEST                  = "hex"
 export const C_UCS                          = 'utf8'
 export const C_ENCODE                       = 'base64'
 
