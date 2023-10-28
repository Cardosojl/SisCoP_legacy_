# SisCoP legacy application
SisCoP is a legacy web application developed using JavaScript, MongoDB with Replication Set, Express, and Handlebars as the template engine. It utilizes asynchronous AJAX calls to enhance user experience. The primary objective of SisCoP is to facilitate the generation, storage, and management of documentation for contract procurement processes, also known as tendering processes. Additionally, it offers features to track and visualize the progress of these processes through different stages.

[![Author](http://img.shields.io/badge/author-@Cardosojl-blue.svg)](https://www.linkedin.com/in/jorge-luiz-cardoso-215914235/) ![GitHub license](https://img.shields.io/github/license/maitraysuthar/rest-api-nodejs-mongodb.svg)

## Features

+ **Document Generation and Storage:** SisCoP enables users to generate, create, and store essential documents related to contract procurement processes. These documents could include official announcements, proposals, and more.

+ **Process Management:** The application offers a user-friendly interface for managing contract procurement processes. Users can create new processes, assign responsibilities, and set milestones.

+ **Process Tracking:** SisCoP provides an overview of the current status of each procurement process. Users can easily identify which stage a process is currently in and access relevant documents.

+ **Replication Set:** SisCoP is built using MongoDB with Replication Set, ensuring data redundancy, high availability, and fault tolerance.

+ **Asynchronous AJAX Calls:** The application utilizes asynchronous AJAX calls to provide seamless interactions and real-time updates to users. This enhances the user experience by minimizing page reloads.

<div style="display: inline">
<img src="https://lh3.googleusercontent.com/pw/ADCreHcGiQrhZW2sR8bJH1992dZ-hQ12weM1pGhlRxBS0Wm-AQ9PLrvvr12TJYpEl6aqULX8KR10_MLuRSPSkDDaKzcy2V4y3A-rpRxofWlWEmtrwVxtigPw2x9h3wqjjpfNtwPBJvEJ3QBqyU3rCygoOEScsNGy2qwoAHdMiJUPFk7YeLbWfGBVc9g63U04X7aRJydpzR20_TK2Kc4RWUMSVOZ2dRBqFpb2bePNpXKUMiBRVa8V8btZtVYmwy-wi2ybMm5rZAxfpVvUc5gP9IeQ-wRpCUGtt17575vN5mMRQTFwZFtGCxF0SCrSsm_Yvk_e-M_4FdUardmn9AV3EqDxnGMH4rrhjU2wrpo-jJFhtP2pga62a12CnDfE9lyRUs3kkZobPSEOUAUNQhCuMUTygGtV10UPJDgiqkxkQCR4NQEEtZWsNuvWCe2xARed7sm7QoXk-qNSZwpFwY14srSHcwx9YmE4YSYwKIKFL_xgIIt-NPq0s1-n_mLXV1rWEY7k2rj8ZhQSmRs4StLnhFdzdeSYb2HX58MsrulNP3F-unEsDgWgT6dfP2OnPhhmSx_esL4DJbEfOltWZz76lPwjRzQv9fcrQOQkvQuthBGLlXyWE8_Tv2J77qggYRG4acC3a4TQZ7PO9vbqSXHrDR8uYRCqAAlM5eugr9XD9Ks55n_DPZ2z7U3ZNTR_Bz9aAjhrBY2jNLOpFwdvsjhM_buSYIL8633oxDH3qjLnmPGnr8U0DyQklpGB80gGJa6xJZi8rSVPc1zI5owbTBTX4bgcZt7t0C_CZv3BrZl5KjUq9yG7REebGAiPiHY5R5-Hd3N0LP7q3oIsZSqgdvHbu6TtCfR4i88_w9r-DCV3ZpmbNDsKiWZ0HwSQR9_YzcLtcI_Xi8c-w8gBKRfOGu25GLQpsgrjctlQ2bdTgcxF_HTwGa0UmE9PVuQ=w1697-h924-s-no?authuser=1" width="400px" />
<img src="https://lh3.googleusercontent.com/pw/ADCreHeuqjitMklQ6c-zCj6ORxSbfZJi_-FcdFO73Lkbv4qLoLn24x6D8FhMUjcCgUIwywfa6_LdoT52H99wA8lXQviC2HjXu6nXq9AqoWMdCKauDa50w60Di7s-75V5HAd08YJM8ZMVx7FTzIa3t4FHPTsamMTprAWRubQlZ19wli4lH5fnL0DJ2ahjvAXCIL9jO7l4XHspxFY_eTiXl--y2z47ZPLGMt_ijNoEz8VdbJAukh78zN6DY_RsV2jMfXEJu7rwc8BQCfBBHcYlWOHjHczYPG4D8wM0Fy_ewTE74RAaQrw7VT3EsD0fpiMhKXFBE4bqIt-CUZpXeMbiRSRmWwsZxqa9LgilCUtfGN3v2fMY54aoJ_HBXfg83SC2E19plsHPsEzfntk5UzpcZ6N5fksAtIbTPM7RU37096nmH-v8YYjupK29NC3T0c1_qQSNpzdZtPxrmCeAgsjpsYX7sGW9_vNVsccxgq2YWd6FDX9w2wjqH4Uzywhhf76dsP41QMakfvOtTnhH0AcViKxFmNoSwfPi5cgLcRbuANc-ummihOoGbM18Q6yAiAG7ckojZESCd99N09wsdODWwjdEOVN31d21E6i8cKi6L_BMT-uItDfIsQtoyq1FJyGNfF9vK9QAJqnqUJyVksg5mE7W3TRWwsTOzQeiTJYEr2f0V8C60SgEY_tf9XOWNO-SBi_G6qZjDrHepNgfqRr_2Ci0hGCCIkYm7RXcBsMpasP_XwN1pCYm7NWpktsWyZ8R2z7zh44rpY8-u0mYb7_DkJlTmGEPWla8icWyeVHLtADtXHViBKpxbw4NngsrhUUrFp6eMMqxTOq3EKACNX9-fM2KDs7XiikPR3SqlzStAGXqnyL2axruM0Y4vqMPrB6lwCxno5LtbUcPhZwsbZA55R_UuTaaGXwI-oh7N423NP1sPYtijUNlyR0=w1702-h924-s-no?authuser=1" width="400px" />  
</div>
<div style="display: inline">
<img src="https://lh3.googleusercontent.com/pw/ADCreHdQVFZQvAHQin4TMN2r5IJkuXeHCf_KKwXrGPoDyZXqSmAInusuv2uxgt910fVVygV4BjU13q1GIqnCWWmgYJ5J_g6546-j2sWPGQ-hVCeqIg4uR2cjztDilZra14PR2TId8EqXKO-mldsgSJgmWr4Ao4JWNWiLHyodrNDMRqTSKrVGandRdSRc53LeEiAKeurpzx0avIskNB5qp-5pS-XHdLF0e6jIvHTw5rAqzKxMNRq8ixMkBqUWZ16YKi2MZTdbkH6ksOxx1sM3_1Ad9h_aaxt-MMPLqLxIqGAqRtdtOMjw9ta7Dp8s68EJjhfcLFGIejojTeFhgnfAnPtZPzMIZxIg2VwuJTSEu0FZgHmDfqryoxzNTwjyt7V2M_5NYGVt99Qe10m3fZMNm-C1PPL0lXnxlzM22CMs2ijchHwI1R2fMJZYbdyTGsl9YqCs9fgmmiLu_i7Arae009noDxv6Zdoa3hOiZBpIxXd54F9mjjFqgmMi55bNOro1tOwK4xfElIHMtle_jJi_5jp1ytj6KYshz0rh9f60cUPvdDrafsEH6QqfFf4_UIYbdzAlx74eMR7qZhPMqex5Inxog5OtsknjoLftlLEE0BORIVtqbyf9JIhpxZ1InZDf58ZBKGWZopQOFW_QexOPB0MIs5qxBoDaI30a4Zmi9KAVHAljzQG4rRwWNN-t5fniBgD-7o7VcUOe8aF05iqQk-5ZivkbciQxv401PFU7sBeWLW6Nzx8VySym4G9dnXzoJbBfv9gOjywBI3k7K0_pubmAW-4cQOIL_XKLtYXvY5enH1OD8cbQQYX8NATjKNpsKG5T0jGRI0pPKA06tXr37BBO-Z4zvem6ZjTU39R2CUgdDTcLeTdhu1uXPdg89z0qe8sS1K4GTWOs06S7ecQTCCCBAZneusj9mIikJjsAbGzxPKiZsSyLhng=w1702-h924-s-no?authuser=1" width="400px" />
<img src="https://lh3.googleusercontent.com/pw/ADCreHc9Bi7eCHjUSbG_j9bZtPsBY93MkF9AXDIYc4ffW28hVHeMRZfYKoim86353LvKAHVhvwuRatcZQ7ynP5kxSWn-_-n7aF0OgcVnxqXkrofg8wXk1S34aKfccRGSDIo80SHsZWBObuhcuCzs0Dm0DgKOZjNMClElC5z_kDsu2q1GYaxe6tWa79BMQNJWn6ZN-pM_P43KPfPvOH9HhXjIL2v7KCgVg9BHsL53x6cSktF4osx7uX9OS8a1SWLbFnWU_vgSQPajZbNlIy-v8vW7IUN7lMb3MLPlY9-A13MTZ8rEzg5MPi35pQoxDMKQcR2AGK3aEfB16s5PrkpiY06yJE0txn99wOZ0sWifMMAy9TJKI2Y9vp0c5bQu1jfAsvlm_HeDwjcfVK58idFUszKNM1uf5pygTLyoOzVnOvOq9Y-dAykvZL6E1w22PfDtL1c-DlmKv_RZZRh9WHrY2fs07EReifhPpvK0pe6Yf1e1kYqSa1df0FaraFIi0kGuwiFrvxkkFnDW_8LaPkso054lwFkPuO9r1ewKIrNP-drrxy8W7zEz8Aq3OXm0zNRMkMeMZCDVeGcYQnrjOrlGQhMBhqK20YgqK1soxPn9HsNPM7qKEAcMj2wlfdUxhG9q7tyryyuacvQ9bIDIWVQQm421bwgZWBzv-9f4tl1-YGGypQbIE6eqG0clNV6VMzFmo8eQyURRyp-bb-98vfOIro0nYrzGNVtgn5T1Lbmf3kT0dERPgvpp5gn2xnn63xQNYgHkgEaZVgtuOP8lkBgSAcRJ6xLkl_Yzy9a-8JoCEd_8DMRCEoq6oZy_bw31QTsmtiWRqpsDGEdAWewK-cAn7sRINnYZGJgvYe1LUW37i_r07s4U7Iu7wD6YPY_CdHp6zlXfwm7Yhjfnv_eUzYscslYBnAUMF3oX0Acfw5XhumIQiMACUC70Eo8=w1695-h924-s-no?authuser=1" width="400px" />  
</div>
<div style="display: inline">
<img src="https://lh3.googleusercontent.com/pw/ADCreHeIGLn3mKR_duFb3lTDYbLUu76H__HYmdrDs3dbLoFjXDDhVS1GKn6EPZwlUMVl04-o6dv4APjyVRhFTqfT_IUtMKGMkDPsPVO_LaX3bvoyNFrS8-4Mupr1x2ZT09t4LqUt8AfjsnyRd6CTuQvioh68PcGI80FFeo-xfdRCtKOm5f3XqXidQ3-2sKztsZ1MoJqKaNrmnTYUbYEb0ofnHvmN26fuAonnWphx7zaY7uHZiqdeE33HDZ_h_8UeiQqIppCMJ6LZCGNc4f9fr0i1zz5e6QXMPDtQsq93m3c9Lz92D6IXDvfefa6O3wydH6A2KQZFUc2DBDjlph1Wx8czrsu3ZXBY5MYedjEPtCbbLyqKbYOk7zsGNhRHkS0A2MZ-xQ9_2hl6pFR8HOdtnLqCO58aS-RFVd9h_kIvowSC7evDDGOuCeKPNCl0m-5977s2ZbI-LpNZGKu9qF_oFnAcn4M2Rb9LOb6KC-5jGSYwu0hg907GRTW40FGNz4KiSl9XF1XCVguSuBXaubs0ZsMdpZsJFq-xnnR7W6UEMEGEh91A8paTe1--oXYotEmg4fHs1D5jM66wnP_AXqALCQlFrq4d8Ti4raGYs4INoHZNtJWluJkjDSBw0dICMGZCSJ6C7QoNh1YuMKDl2X8845K2RWmo3kPHcwuhzD_3BBLsZt6X_X0zZHrwFl9kWk5wDXRHde7bm7fa229l4U2Dg2mFcO9T_OIThh8jUsxISJ5JutjfG2mVpneeJRQnfKqVgytT-Z9Als4Dlnr1RApiD08qgTR_RWMe2fFUEzJQHeAA8xOjeNc0wKAv_576UAvzBIHE6oZGwp2z19QHebqH-QoMOkimiRvwlTbq_DvnR7f2t5bp7Ogcq309eD8Cv4GJM4hCxyFfV8JPgUbirz9fTH6NLKWk-MGGdRqVP1wSoxsIPhlAMfluNMU=w1698-h924-s-no?authuser=1" width="400px" />
<img src="https://lh3.googleusercontent.com/pw/ADCreHcdJ5mZwdnkYnZQIzU1v_9hOvAuhdVAiIYgmJ6XkaIqDQsQxiJ8VROp2SYrZnhNaDH6mSspP4jm3RtjG8i42ic7M6ZhU0h9xxcehIOjQ-Dp60yfg80VlnOK-vEjkMXHyU-xFVTMao7pYft95PqUi2Ey1-62GUdfAiuiN7mKj4sh1_7iZd0rZCVVCjZw1jRemOFpD_HfanzuC_3Rt4sY1ahreDYva8garODVjKBB2K1bObNIWMs4qiMu6eIuF3mYnlBh9gPmlcmB0BzNC_Mgko4YChokfp3l1V7cJuaYUFYu6zEZfMNViiNiA2xrMCFa60knF5xAg3fpQG2DIRxx1rmBkVxWMj0rT5NJ2VgefvPdAORZLmrXCn1P3VieuEmSuBWU9kz5k_PUQb8khZkxOC60hiaC72PuvAIyaAza5p2rHR0-1gSL1Uqql1H4dy2bLto9NRN9zTJl6se3JbCNp98dRLnUNGK7nqM3lB2hG9LDwAPKs6rx-_JDvTrD8zW3R3bVzgzV4-Qb7fPFX5L51RJwXbuZ5wG-JqvUqVRkhxBVRTm1TTnN0EPX5GNOGI6S52t4JFglNR413uGH1m6MELE68Q9x1RMBXMijO3IsCBf_ncYNziOmcbIc_k6PgnyKUFOLeqv4oC3tkRWpgR8U2Ft1qrlvG_98-9Q-fA5hKbp1XEicwBDJNU5pUSOB58MJqVarXkXJ6iUsX26AUNuqcA5WDgqTru78D_1aFTkjan45OjBU4oP7Jq-cjyZr35tED2hPKjPv8nL6QKdorPjeWmXtB4m6YMhzZNDuWL8r5rraeYgTNuYTxSFa2p_ESXIBcbpI3tdvQ2AEXuHMLSMlpfRw7JpioUiroifdRZgH1zaXSqbRsOVBaubBZAoOGKE2hf9mwFphCUp2VpwsSyLLqfZZ77qzKPqpsIUEUPgBymdsvkObU5c=w1700-h924-s-no?authuser=1" width="400px" />  
</div>
 
## Requirements

+ Node.js 16+
+ MongoDB 5.0.22+

## How to Install

  ### Using Git
  1.   Clone the project from github. Change "myproject" to your project name or Download using the "Download Zip" button:
  ```bash
  git clone https://github.com/Cardosojl/SisCoP_legacy_.git ./myproject
  ```
  ### Download and Uncompress
  1. Donwload the repository.
  2. Uncompress to your desired directory.

  ### Install Dependencies
  1. Start a terminal in the repository folder.
  2. Run npm to install project dependencies:
  ```bash
  npm install
  ```
  ### Initiate Database
  1. Create collections with initial values ​​for the application to work. (It is recommended to use replicaset):
  ```bash
  node ./DBStart/initDB.js
  ```
  + After your run you should see:
  ```sh
  Connected to Database
  Collections Created
  ```
  ### Prepare the enviroment
  1. Create a file called ***.env*** and type the environment variables:
  ```sh
  SISCOP_SECRET=[insert the value to your session secret]
  HOST=[your host to create a server]  Ex: 127.0.0.1
  PORT=[the port to run the application]  Ex: 9999
  DB_LINK=[your mongodb link]  Ex:mongodb+srv://[user]:[password]@[cluster]/siscop?retryWrites=true&w=majority
  ```
## Running
  1. To be albe to run the application you must use:
  ```bash
  npm run dev
  ```
  + After that it's just access http://[your selected HOST]:[your selected PORT].
  + To login, you can use:  login: "ADM" / password: "123456".