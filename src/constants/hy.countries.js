const countries = {
    ZZ: 'Միջազգային',
    AZ: '\u0531\u0564\u0580\u0562\u0565\u057b\u0561\u0576',
    AX: '\u0531\u056c\u0561\u0576\u0564\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    AL: '\u0531\u056c\u0562\u0561\u0576\u056b\u0561',
    DZ: '\u0531\u056c\u056a\u056b\u0580',
    AS: '\u0531\u0574\u0565\u0580\u056b\u056f\u0575\u0561\u0576 \u054d\u0561\u0574\u0578\u0561',
    VI: '\u0531\u0544\u0546 \u054e\u056b\u0580\u057b\u056b\u0576\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    AO: '\u0531\u0576\u0563\u0578\u056c\u0561',
    AI: '\u0531\u0576\u0563\u0578\u0582\u056b\u056c\u0561',
    AD: '\u0531\u0576\u0564\u0578\u0580\u0580\u0561',
    AQ: '\u0531\u0576\u057f\u0561\u0580\u056f\u057f\u056b\u0564\u0561',
    AG: '\u0531\u0576\u057f\u056b\u0563\u0578\u0582\u0561 \u0587 \u0532\u0561\u0580\u0562\u0578\u0582\u0564\u0561',
    AU: '\u0531\u057e\u057d\u057f\u0580\u0561\u056c\u056b\u0561',
    AT: '\u0531\u057e\u057d\u057f\u0580\u056b\u0561',
    AE: '\u0531\u0580\u0561\u0562\u0561\u056f\u0561\u0576 \u0544\u056b\u0561\u0581\u0575\u0561\u056c \u0537\u0574\u056b\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580',
    AR: '\u0531\u0580\u0563\u0565\u0576\u057f\u056b\u0576\u0561',
    AW: '\u0531\u0580\u0578\u0582\u0562\u0561',
    UM: '\u0531\u0580\u057f\u0561\u0584\u056b\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580 (\u0531\u0544\u0546)',
    EH: '\u0531\u0580\u0587\u0574\u057f\u0575\u0561\u0576 \u054d\u0561\u0570\u0561\u0580\u0561',
    AF: '\u0531\u0586\u0572\u0561\u0576\u057d\u057f\u0561\u0576',
    BS: '\u0532\u0561\u0570\u0561\u0574\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    BH: '\u0532\u0561\u0570\u0580\u0565\u0575\u0576',
    BD: '\u0532\u0561\u0576\u0563\u056c\u0561\u0564\u0565\u0577',
    BB: '\u0532\u0561\u0580\u0562\u0561\u0564\u0578\u057d',
    BY: '\u0532\u0565\u056c\u0561\u057c\u0578\u0582\u057d',
    BE: '\u0532\u0565\u056c\u0563\u056b\u0561',
    BZ: '\u0532\u0565\u056c\u056b\u0566',
    BJ: '\u0532\u0565\u0576\u056b\u0576',
    BM: '\u0532\u0565\u0580\u0574\u0578\u0582\u0564\u0576\u0565\u0580',
    BW: '\u0532\u0578\u0569\u057d\u057e\u0561\u0576\u0561',
    BO: '\u0532\u0578\u056c\u056b\u057e\u056b\u0561',
    BA: '\u0532\u0578\u057d\u0576\u056b\u0561 \u0587 \u0540\u0565\u0580\u0581\u0565\u0563\u0578\u057e\u056b\u0576\u0561',
    BT: '\u0532\u0578\u0582\u0569\u0561\u0576',
    BG: '\u0532\u0578\u0582\u056c\u0572\u0561\u0580\u056b\u0561',
    BV: '\u0532\u0578\u0582\u057e\u0565 \u056f\u0572\u0566\u056b',
    BF: '\u0532\u0578\u0582\u0580\u056f\u056b\u0576\u0561 \u0556\u0561\u057d\u0578',
    BI: '\u0532\u0578\u0582\u0580\u0578\u0582\u0576\u0564\u056b',
    BR: '\u0532\u0580\u0561\u0566\u056b\u056c\u056b\u0561',
    VG: '\u0532\u0580\u056b\u057f\u0561\u0576\u0561\u056f\u0561\u0576 \u054e\u056b\u0580\u057b\u056b\u0576\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    IO: '\u0532\u0580\u056b\u057f\u0561\u0576\u0561\u056f\u0561\u0576 \u054f\u0561\u0580\u0561\u056e\u0584 \u0540\u0576\u0564\u056f\u0561\u056f\u0561\u0576 \u0555\u057e\u056f\u056b\u0561\u0576\u0578\u057d\u0578\u0582\u0574',
    BN: '\u0532\u0580\u0578\u0582\u0576\u0565\u0575',
    GA: '\u0533\u0561\u0562\u0578\u0576',
    GM: '\u0533\u0561\u0574\u0562\u056b\u0561',
    GY: '\u0533\u0561\u0575\u0561\u0576\u0561',
    GH: '\u0533\u0561\u0576\u0561',
    DE: '\u0533\u0565\u0580\u0574\u0561\u0576\u056b\u0561',
    GG: '\u0533\u0565\u0580\u0576\u057d\u056b',
    GU: '\u0533\u0578\u0582\u0561\u0574',
    GP: '\u0533\u057e\u0561\u0564\u0565\u056c\u0578\u0582\u057a\u0561',
    GT: '\u0533\u057e\u0561\u057f\u0565\u0574\u0561\u056c\u0561',
    GN: '\u0533\u057e\u056b\u0576\u0565\u0561',
    GW: '\u0533\u057e\u056b\u0576\u0565\u0561-\u0532\u056b\u057d\u0561\u0578\u0582',
    GD: '\u0533\u0580\u0565\u0576\u0561\u0564\u0561',
    GL: '\u0533\u0580\u0565\u0576\u056c\u0561\u0576\u0564\u056b\u0561',
    DK: '\u0534\u0561\u0576\u056b\u0561',
    DM: '\u0534\u0578\u0574\u056b\u0576\u056b\u056f\u0561',
    DO: '\u0534\u0578\u0574\u056b\u0576\u056b\u056f\u0575\u0561\u0576 \u0540\u0561\u0576\u0580\u0561\u057a\u0565\u057f\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
    EG: '\u0535\u0563\u056b\u057a\u057f\u0578\u057d',
    ET: '\u0535\u0569\u0578\u057e\u057a\u056b\u0561',
    YE: '\u0535\u0574\u0565\u0576',
    ZM: '\u0536\u0561\u0574\u0562\u056b\u0561',
    ZW: '\u0536\u056b\u0574\u0562\u0561\u0562\u057e\u0565',
    EC: '\u0537\u056f\u057e\u0561\u0564\u0578\u0580',
    SZ: '\u0537\u057d\u057e\u0561\u057f\u056b\u0576\u056b',
    EE: '\u0537\u057d\u057f\u0578\u0576\u056b\u0561',
    ER: '\u0537\u0580\u056b\u0569\u0580\u0565\u0561',
    TH: '\u0539\u0561\u0575\u056c\u0561\u0576\u0564',
    TW: '\u0539\u0561\u0575\u057e\u0561\u0576',
    TC: '\u0539\u0568\u0580\u0584\u057d \u0587 \u053f\u0561\u0575\u056f\u0578\u057d \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    TL: '\u0539\u056b\u0574\u0578\u0580 \u053c\u0565\u0577\u057f\u056b',
    TN: '\u0539\u0578\u0582\u0576\u056b\u057d',
    TR: '\u0539\u0578\u0582\u0580\u0584\u056b\u0561',
    TM: '\u0539\u0578\u0582\u0580\u0584\u0574\u0565\u0576\u057d\u057f\u0561\u0576',
    ID: '\u053b\u0576\u0564\u0578\u0576\u0565\u0566\u056b\u0561',
    IE: '\u053b\u057c\u056c\u0561\u0576\u0564\u056b\u0561',
    IS: '\u053b\u057d\u056c\u0561\u0576\u0564\u056b\u0561',
    ES: '\u053b\u057d\u057a\u0561\u0576\u056b\u0561',
    IL: '\u053b\u057d\u0580\u0561\u0575\u0565\u056c',
    IT: '\u053b\u057f\u0561\u056c\u056b\u0561',
    IR: '\u053b\u0580\u0561\u0576',
    IQ: '\u053b\u0580\u0561\u0584',
    LA: '\u053c\u0561\u0578\u057d',
    LV: '\u053c\u0561\u057f\u057e\u056b\u0561',
    PL: '\u053c\u0565\u0570\u0561\u057d\u057f\u0561\u0576',
    LS: '\u053c\u0565\u057d\u0578\u057f\u0578',
    LB: '\u053c\u056b\u0562\u0561\u0576\u0561\u0576',
    LR: '\u053c\u056b\u0562\u0565\u0580\u056b\u0561',
    LY: '\u053c\u056b\u0562\u056b\u0561',
    LI: '\u053c\u056b\u056d\u057f\u0565\u0576\u0577\u057f\u0565\u0575\u0576',
    LT: '\u053c\u056b\u057f\u057e\u0561',
    LU: '\u053c\u0575\u0578\u0582\u0584\u057d\u0565\u0574\u0562\u0578\u0582\u0580\u0563',
    HR: '\u053d\u0578\u0580\u057e\u0561\u0569\u056b\u0561',
    CV: '\u053f\u0561\u0562\u0578 \u054e\u0565\u0580\u0564\u0565',
    KH: '\u053f\u0561\u0574\u0562\u0578\u057b\u0561',
    CM: '\u053f\u0561\u0574\u0565\u0580\u0578\u0582\u0576',
    KY: '\u053f\u0561\u0575\u0574\u0561\u0576\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    CA: '\u053f\u0561\u0576\u0561\u0564\u0561',
    QA: '\u053f\u0561\u057f\u0561\u0580',
    BQ: '\u053f\u0561\u0580\u056b\u0562\u0575\u0561\u0576 \u0546\u056b\u0564\u0565\u057c\u056c\u0561\u0576\u0564\u0576\u0565\u0580',
    CF: '\u053f\u0565\u0576\u057f\u0580\u0578\u0576\u0561\u056f\u0561\u0576 \u0531\u0586\u0580\u056b\u056f\u0575\u0561\u0576 \u0540\u0561\u0576\u0580\u0561\u057a\u0565\u057f\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
    CY: '\u053f\u056b\u057a\u0580\u0578\u057d',
    KI: '\u053f\u056b\u0580\u056b\u0562\u0561\u057f\u056b',
    CW: '\u053f\u0575\u0578\u0582\u0580\u0561\u057d\u0561\u0578',
    CO: '\u053f\u0578\u056c\u0578\u0582\u0574\u0562\u056b\u0561',
    CC: '\u053f\u0578\u056f\u0578\u057d\u0575\u0561\u0576 (\u0554\u056b\u056c\u056b\u0576\u0563) \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    KM: '\u053f\u0578\u0574\u0578\u0580\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    CG: '\u053f\u0578\u0576\u0563\u0578 - \u0532\u0580\u0561\u0566\u0561\u057e\u056b\u056c',
    CD: '\u053f\u0578\u0576\u0563\u0578 - \u053f\u056b\u0576\u0577\u0561\u057d\u0561',
    CR: '\u053f\u0578\u057d\u057f\u0561 \u054c\u056b\u056f\u0561',
    CI: '\u053f\u0578\u057f \u0564\u055a\u053b\u057e\u0578\u0582\u0561\u0580',
    CU: '\u053f\u0578\u0582\u0562\u0561',
    CK: '\u053f\u0578\u0582\u056f\u056b \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    AM: '\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576',
    HT: '\u0540\u0561\u0575\u056b\u0569\u056b',
    GQ: '\u0540\u0561\u057d\u0561\u0580\u0561\u056f\u0561\u056e\u0561\u0575\u056b\u0576 \u0533\u057e\u056b\u0576\u0565\u0561',
    KR: '\u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576 \u053f\u0578\u0580\u0565\u0561',
    GS: '\u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576 \u054b\u0578\u0580\u057b\u056b\u0561 \u0587 \u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576 \u054d\u0565\u0576\u0564\u057e\u056b\u0579\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    SS: '\u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576 \u054d\u0578\u0582\u0564\u0561\u0576',
    ZA: '\u0540\u0561\u0580\u0561\u057e\u0561\u0586\u0580\u056b\u056f\u0575\u0561\u0576 \u0540\u0561\u0576\u0580\u0561\u057a\u0565\u057f\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
    HM: '\u0540\u0565\u0580\u0564 \u056f\u0572\u0566\u056b \u0587 \u0544\u0561\u056f\u0534\u0578\u0576\u0561\u056c\u0564\u056b \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    KP: '\u0540\u0575\u0578\u0582\u057d\u056b\u057d\u0561\u0575\u056b\u0576 \u053f\u0578\u0580\u0565\u0561',
    MK: '\u0540\u0575\u0578\u0582\u057d\u056b\u057d\u0561\u0575\u056b\u0576 \u0544\u0561\u056f\u0565\u0564\u0578\u0576\u056b\u0561',
    MP: '\u0540\u0575\u0578\u0582\u057d\u056b\u057d\u0561\u0575\u056b\u0576 \u0544\u0561\u0580\u056b\u0561\u0576\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    IN: '\u0540\u0576\u0564\u056f\u0561\u057d\u057f\u0561\u0576',
    HN: '\u0540\u0578\u0576\u0564\u0578\u0582\u0580\u0561\u057d',
    HK: '\u0540\u0578\u0576\u056f\u0578\u0576\u0563\u056b \u0540\u054e\u0547',
    JO: '\u0540\u0578\u0580\u0564\u0561\u0576\u0561\u0576',
    GR: '\u0540\u0578\u0582\u0576\u0561\u057d\u057f\u0561\u0576',
    HU: '\u0540\u0578\u0582\u0576\u0563\u0561\u0580\u056b\u0561',
    KZ: '\u0542\u0561\u0566\u0561\u056d\u057d\u057f\u0561\u0576',
    KG: '\u0542\u0580\u0572\u0566\u057d\u057f\u0561\u0576',
    JM: '\u0543\u0561\u0574\u0561\u0575\u056f\u0561',
    JP: '\u0543\u0561\u057a\u0578\u0576\u056b\u0561',
    MG: '\u0544\u0561\u0564\u0561\u0563\u0561\u057d\u056f\u0561\u0580',
    MY: '\u0544\u0561\u056c\u0561\u0575\u0566\u056b\u0561',
    MW: '\u0544\u0561\u056c\u0561\u057e\u056b',
    MV: '\u0544\u0561\u056c\u0564\u056b\u057e\u0576\u0565\u0580',
    MT: '\u0544\u0561\u056c\u0569\u0561',
    ML: '\u0544\u0561\u056c\u056b',
    YT: '\u0544\u0561\u0575\u0578\u057f',
    MU: '\u0544\u0561\u057e\u0580\u056b\u056f\u056b\u0578\u057d',
    MR: '\u0544\u0561\u057e\u0580\u056b\u057f\u0561\u0576\u056b\u0561',
    MH: '\u0544\u0561\u0580\u0577\u0561\u056c\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    MA: '\u0544\u0561\u0580\u0578\u056f\u056f\u0578',
    MQ: '\u0544\u0561\u0580\u057f\u056b\u0576\u056b\u056f\u0561',
    IM: '\u0544\u0565\u0576 \u056f\u0572\u0566\u056b',
    MX: '\u0544\u0565\u0584\u057d\u056b\u056f\u0561',
    GB: '\u0544\u056b\u0561\u0581\u0575\u0561\u056c \u0539\u0561\u0563\u0561\u057e\u0578\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
    US: '\u0544\u056b\u0561\u0581\u0575\u0561\u056c \u0546\u0561\u0570\u0561\u0576\u0563\u0576\u0565\u0580',
    FM: '\u0544\u056b\u056f\u0580\u0578\u0576\u0565\u0566\u056b\u0561',
    MM: '\u0544\u0575\u0561\u0576\u0574\u0561 (\u0532\u056b\u0580\u0574\u0561)',
    MZ: '\u0544\u0578\u0566\u0561\u0574\u0562\u056b\u056f',
    MD: '\u0544\u0578\u056c\u0564\u0578\u057e\u0561',
    MC: '\u0544\u0578\u0576\u0561\u056f\u0578',
    MN: '\u0544\u0578\u0576\u0572\u0578\u056c\u056b\u0561',
    MS: '\u0544\u0578\u0576\u057d\u0565\u057c\u0561\u057f',
    NA: '\u0546\u0561\u0574\u056b\u0562\u056b\u0561',
    NR: '\u0546\u0561\u0578\u0582\u0580\u0578\u0582',
    NP: '\u0546\u0565\u057a\u0561\u056c',
    NE: '\u0546\u056b\u0563\u0565\u0580',
    NG: '\u0546\u056b\u0563\u0565\u0580\u056b\u0561',
    NL: '\u0546\u056b\u0564\u0565\u057c\u056c\u0561\u0576\u0564\u0576\u0565\u0580',
    NI: '\u0546\u056b\u056f\u0561\u0580\u0561\u0563\u0578\u0582\u0561',
    NU: '\u0546\u056b\u0578\u0582\u0565',
    NZ: '\u0546\u0578\u0580 \u0536\u0565\u056c\u0561\u0576\u0564\u056b\u0561',
    NC: '\u0546\u0578\u0580 \u053f\u0561\u056c\u0565\u0564\u0578\u0576\u056b\u0561',
    NO: '\u0546\u0578\u0580\u057e\u0565\u0563\u056b\u0561',
    NF: '\u0546\u0578\u0580\u0586\u0578\u056c\u056f \u056f\u0572\u0566\u056b',
    SE: '\u0547\u057e\u0565\u0564\u056b\u0561',
    CH: '\u0547\u057e\u0565\u0575\u0581\u0561\u0580\u056b\u0561',
    LK: '\u0547\u0580\u056b \u053c\u0561\u0576\u056f\u0561',
    UG: '\u0548\u0582\u0563\u0561\u0576\u0564\u0561',
    UZ: '\u0548\u0582\u0566\u0562\u0565\u056f\u057d\u057f\u0561\u0576',
    UA: '\u0548\u0582\u056f\u0580\u0561\u056b\u0576\u0561',
    WF: '\u0548\u0582\u0578\u056c\u056b\u057d \u0587 \u0556\u0578\u0582\u057f\u0578\u0582\u0576\u0561',
    UY: '\u0548\u0582\u0580\u0578\u0582\u0563\u057e\u0561\u0575',
    TD: '\u0549\u0561\u0564',
    CZ: '\u0549\u0565\u056d\u056b\u0561',
    ME: '\u0549\u0565\u057c\u0576\u0578\u0563\u0578\u0580\u056b\u0561',
    CL: '\u0549\u056b\u056c\u056b',
    CN: '\u0549\u056b\u0576\u0561\u057d\u057f\u0561\u0576',
    MO: '\u0549\u056b\u0576\u0561\u057d\u057f\u0561\u0576\u056b \u0544\u0561\u056f\u0561\u0578 \u0540\u054e\u0547',
    PW: '\u054a\u0561\u056c\u0561\u0578\u0582',
    PK: '\u054a\u0561\u056f\u056b\u057d\u057f\u0561\u0576',
    PS: '\u054a\u0561\u0572\u0565\u057d\u057f\u056b\u0576\u0575\u0561\u0576 \u057f\u0561\u0580\u0561\u056e\u0584\u0576\u0565\u0580',
    PA: '\u054a\u0561\u0576\u0561\u0574\u0561',
    PG: '\u054a\u0561\u057a\u0578\u0582\u0561 \u0546\u0578\u0580 \u0533\u057e\u056b\u0576\u0565\u0561',
    PY: '\u054a\u0561\u0580\u0561\u0563\u057e\u0561\u0575',
    PE: '\u054a\u0565\u0580\u0578\u0582',
    PN: '\u054a\u056b\u057f\u056f\u0565\u057c\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    PT: '\u054a\u0578\u0580\u057f\u0578\u0582\u0563\u0561\u056c\u056b\u0561',
    PR: '\u054a\u0578\u0582\u0565\u0580\u057f\u0578 \u054c\u056b\u056f\u0578',
    JE: '\u054b\u0565\u0580\u057d\u056b',
    DJ: '\u054b\u056b\u0562\u0578\u0582\u0569\u056b',
    GI: '\u054b\u056b\u0562\u0580\u0561\u056c\u0569\u0561\u0580',
    RE: '\u054c\u0565\u0575\u0578\u0582\u0576\u056b\u0578\u0576',
    RW: '\u054c\u0578\u0582\u0561\u0576\u0564\u0561',
    RO: '\u054c\u0578\u0582\u0574\u056b\u0576\u056b\u0561',
    RU: '\u054c\u0578\u0582\u057d\u0561\u057d\u057f\u0561\u0576',
    SV: '\u054d\u0561\u056c\u057e\u0561\u0564\u0578\u0580',
    WS: '\u054d\u0561\u0574\u0578\u0561',
    SM: '\u054d\u0561\u0576 \u0544\u0561\u0580\u056b\u0576\u0578',
    ST: '\u054d\u0561\u0576 \u054f\u0578\u0574\u0565 \u0587 \u0553\u0580\u056b\u0576\u057d\u056b\u057a\u056b',
    SA: '\u054d\u0561\u0578\u0582\u0564\u0575\u0561\u0576 \u0531\u0580\u0561\u0562\u056b\u0561',
    SC: '\u054d\u0565\u0575\u0577\u0565\u056c\u0576\u0565\u0580',
    MF: '\u054d\u0565\u0576 \u0544\u0561\u0580\u057f\u0565\u0576',
    PM: '\u054d\u0565\u0576 \u054a\u056b\u0565\u057c \u0587 \u0544\u056b\u0584\u0565\u056c\u0578\u0576',
    SN: '\u054d\u0565\u0576\u0565\u0563\u0561\u056c',
    LC: '\u054d\u0565\u0576\u0569 \u053c\u0575\u0578\u0582\u057d\u056b\u0561',
    VC: '\u054d\u0565\u0576\u0569 \u054e\u056b\u0576\u057d\u0565\u0576\u0569 \u0587 \u0533\u0580\u0565\u0576\u0561\u0564\u056b\u0576\u0576\u0565\u0580',
    KN: '\u054d\u0565\u0576\u0569 \u0554\u056b\u057f\u057d \u0587 \u0546\u0587\u056b\u057d',
    RS: '\u054d\u0565\u0580\u0562\u056b\u0561',
    SL: '\u054d\u056b\u0565\u057c\u0561 \u053c\u0565\u0578\u0576\u0565',
    SG: '\u054d\u056b\u0576\u0563\u0561\u057a\u0578\u0582\u0580',
    SX: '\u054d\u056b\u0576\u057f \u0544\u0561\u0580\u057f\u0565\u0576',
    SY: '\u054d\u056b\u0580\u056b\u0561',
    SK: '\u054d\u056c\u0578\u057e\u0561\u056f\u056b\u0561',
    SI: '\u054d\u056c\u0578\u057e\u0565\u0576\u056b\u0561',
    SB: '\u054d\u0578\u0572\u0578\u0574\u0578\u0576\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    SO: '\u054d\u0578\u0574\u0561\u056c\u056b',
    SD: '\u054d\u0578\u0582\u0564\u0561\u0576',
    BL: '\u054d\u0578\u0582\u0580\u0562 \u0532\u0561\u0580\u0564\u0578\u0582\u0572\u056b\u0574\u0565\u0578\u057d',
    CX: '\u054d\u0578\u0582\u0580\u0562 \u053e\u0576\u0576\u0564\u0575\u0561\u0576 \u056f\u0572\u0566\u056b',
    SH: '\u054d\u0578\u0582\u0580\u0562 \u0540\u0565\u0572\u056b\u0576\u0565\u056b \u056f\u0572\u0566\u056b',
    SR: '\u054d\u0578\u0582\u0580\u056b\u0576\u0561\u0574',
    SJ: '\u054d\u057e\u0561\u056c\u0562\u0561\u0580\u0564 \u0587 \u0545\u0561\u0576 \u0544\u0561\u0575\u0565\u0576',
    VU: '\u054e\u0561\u0576\u0578\u0582\u0561\u057f\u0578\u0582',
    VA: '\u054e\u0561\u057f\u056b\u056f\u0561\u0576',
    VE: '\u054e\u0565\u0576\u0565\u057d\u0578\u0582\u0565\u056c\u0561',
    VN: '\u054e\u056b\u0565\u057f\u0576\u0561\u0574',
    GE: '\u054e\u0580\u0561\u057d\u057f\u0561\u0576',
    TZ: '\u054f\u0561\u0576\u0566\u0561\u0576\u056b\u0561',
    TJ: '\u054f\u0561\u057b\u056b\u056f\u057d\u057f\u0561\u0576',
    TG: '\u054f\u0578\u0563\u0578',
    TK: '\u054f\u0578\u056f\u0565\u056c\u0561\u0578\u0582',
    TO: '\u054f\u0578\u0576\u0563\u0561',
    TV: '\u054f\u0578\u0582\u057e\u0561\u056c\u0578\u0582',
    TT: '\u054f\u0580\u056b\u0576\u056b\u0564\u0561\u0564 \u0587 \u054f\u0578\u0562\u0561\u0563\u0578',
    KE: '\u0554\u0565\u0576\u056b\u0561',
    KW: '\u0554\u0578\u0582\u057e\u0565\u0575\u0569',
    OM: '\u0555\u0574\u0561\u0576',
    FO: '\u0556\u0561\u0580\u0565\u0580\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    PH: '\u0556\u056b\u056c\u056b\u057a\u056b\u0576\u0576\u0565\u0580',
    FI: '\u0556\u056b\u0576\u056c\u0561\u0576\u0564\u056b\u0561',
    FJ: '\u0556\u056b\u057b\u056b',
    FK: '\u0556\u0578\u056c\u0584\u056c\u0565\u0576\u0564\u0575\u0561\u0576 \u056f\u0572\u0566\u056b\u0576\u0565\u0580',
    FR: '\u0556\u0580\u0561\u0576\u057d\u056b\u0561',
    GF: '\u0556\u0580\u0561\u0576\u057d\u056b\u0561\u056f\u0561\u0576 \u0533\u057e\u056b\u0561\u0576\u0561',
    TF: '\u0556\u0580\u0561\u0576\u057d\u056b\u0561\u056f\u0561\u0576 \u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576 \u054f\u0561\u0580\u0561\u056e\u0584\u0576\u0565\u0580',
    PF: '\u0556\u0580\u0561\u0576\u057d\u056b\u0561\u056f\u0561\u0576 \u054a\u0578\u056c\u056b\u0576\u0565\u0566\u056b\u0561',
    AC: 'Սուրբ Հեղինեի կղզի',
    TA: 'Տրիստան դա Կունյա',
    XK: 'Կոսովո',
};

export default function getArmenianLocale() {
    return Object.keys(countries)
        .sort()
        .reduce((all, country) => ({...all, [country]: countries[country]}), {});
}
