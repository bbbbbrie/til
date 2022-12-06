# TIL that curlconverter.com exists

The [curlconverter.com](https://curlconverter.com/) site came across my desk. It purports:

> Convert curl commands to Python, JavaScript, PHP, R, Go, C#, Ruby, Rust, Elixir, Java, MATLAB, Dart, CFML, Ansible URI or JSON

Well! That would be convenient for some use cases. 

  - I found [this CSV](https://stats.govt.nz/assets/Uploads/Household-living-costs-price-indexes/Household-living-costs-price-indexes-September-2022-quarter/Download-data/Household-living-costs-price-indexes-September-2022-quarter-group-facts.csv) of Household living costs price indexes: September 2022 quarter in New Zealand to use.

Here's the MATLAB output:

```
%% Web Access using Data Import and Export API
uri = 'https://stats.govt.nz/assets/Uploads/Household-living-costs-price-indexes/Household-living-costs-price-indexes-September-2022-quarter/Download-data/Household-living-costs-price-indexes-September-2022-quarter-group-facts.csv';
response = webread(uri);

%% HTTP Interface
import matlab.net.*
import matlab.net.http.*

uri = URI(...
    'https://stats.govt.nz/assets/Uploads/Household-living-costs-price-indexes/Household-living-costs-price-indexes-September-2022-quarter/Download-data/Household-living-costs-price-indexes-September-2022-quarter-group-facts.csv'...
);
response = RequestMessage().send(uri.EncodedURI);
```


It pretty much just works! [Insomnia](https://insomnia.rest), my go-to API client, has very similar functionality. I trust it to handle authentication but this site has a few languages that Insomnia does not. Insomnia does sometimes have a few more options for the languages it does support. For Python, `curlconverter.com` uses only the `requests` library while Insomnia supports `http.client`, too.


## Self-Hosted

The [source](https://github.com/curlconverter/curlconverter) is available if you'd like to deploy your own.
