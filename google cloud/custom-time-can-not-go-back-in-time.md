# Moving in time with Custom-Time

While reading about how [object creation time](https://cloud.google.com/storage/docs/lifecycle#creationtime) is handled by Google Cloud's [object lifecycle management](https://cloud.google.com/storage/docs/lifecycle), I learned about `Custom-Time`. The `Custom-Time` [metadata](https://cloud.google.com/storage/docs/metadata#custom-time) can be set by the user, in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) form. In the docs on `Custom-Time`, we learn that the value can **not** be removed. Once you set a `Custom-Time`, you have a `Custom-Time`. 

It is also _not_ possible to decrease the `Custom-Time` value. This means that the time can not be changed to be _earlier_ than the current `Custom-Time`. This suggests that `Custom-Time` can be modified to a value later in time. 

## READmore

See [It’s business time: One good use of the GCS Custom-Time field](https://medium.com/@domzippilli/its-business-time-one-good-use-of-the-gcs-custom-time-field-7e8391d20f5e) by a Googler who works in Google Cloud and shares only his own opinions. The same person also wrote [Building and using an inventory of your Google Cloud Storage objects](https://medium.com/google-cloud/building-and-using-an-inventory-of-your-google-cloud-storage-objects-in-bigquery-1afae4333351): clone [this project](https://github.com/domZippilli/gcs-inventory-loader) to get started. 
