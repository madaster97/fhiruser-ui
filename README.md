# fhiruser-ui

> A react UI component for investigating SMART on FHIR access token responses

[![NPM](https://img.shields.io/npm/v/fhiruser-ui.svg)](https://www.npmjs.com/package/fhiruser-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save fhiruser-ui
```

## Usage

```tsx
import React, { FC } from 'react'

import FhirUserComponent from 'fhiruser-ui'
import 'fhiruser-ui/dist/index.css'

const App: FC = () => {
  return <FhirUserComponent iss="https://r4.smarthealthit.org"
    introspectEndpoint="https://r4.smarthealthit.org/introspect"
    tokenResponse={{
      "need_patient_banner": false,
      "smart_style_url": "https://launch.smarthealthit.org/smart-style.json",
      "patient": "87a339d0-8cae-418e-89c7-8651e6aab3c6",
      "encounter": "418e38cf-9da6-4155-b205-0be24024b1db",
      "refresh_token": "faker-test-token",
      "token_type": "bearer",
      "scope": "patient/*.* user/*.* launch openid fhirUser profile offline_access",
      "expires_in": 3600,
      "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlIjoiUHJhY3RpdGlvbmVyL2U0NDNhYzU4LThlY2UtNDM4NS04ZDU1LTc3NWMxYjhmM2EzNyIsImZoaXJVc2VyIjoiUHJhY3RpdGlvbmVyL2U0NDNhYzU4LThlY2UtNDM4NS04ZDU1LTc3NWMxYjhmM2EzNyIsImF1ZCI6IndoYXRldmVyIiwic3ViIjoiZjYzYzVlOWEwMGRkNDg3OGI3MzRlNjBlMGE2NDY3N2JjMjdiODE4ZDhhM2ZiOTgxM2FkMmYzNTIzNmRhZDJlYSIsImlzcyI6Imh0dHBzOi8vbGF1bmNoLnNtYXJ0aGVhbHRoaXQub3JnL3YvcjQvZmhpciIsImlhdCI6MTYzNzIwMjA3NSwiZXhwIjoxNjM3MjA1Njc1fQ.mdIck-ITqWL1PcJ1xi7lf_FVGYCgmL8KEtiOlk0r2Yc8E60iOscdHaw9u1Sps4cd6wBs6iS4-RfocsHS0S6GT_3s3awaHN7fSqUZ4SwK0_wl50JmjWCKRZiInDbTSwUKJS2DY5eyoQMK_-wPEu9zsyZs7VX7Gv7bfUIAen1t6i6spqQos8kRXFdlW9C5AV8c_3lys9mv-NY4qViF5e-_kcHF0_9zeV9DyIClk8p9QCcXcyZbtzzjBii0NXrbPJoqehtSu-RsLX6EdlskHT6cTca95IV0_4S7W0pp0KAqvpPFbjhnsRb9QsSdyvkTGCvDGtYEkllBbC76fT8h6MVT8g",
      "access_token": "fake-test-token"
    }} />
}
```

## License

MIT © [madaster97](https://github.com/madaster97)
