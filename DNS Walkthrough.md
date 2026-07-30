# DNS Walkthrough

## What is DNS?

The Domain Name System (DNS) is like the internet's phonebook. Humans remember website names such as `google.com`, but computers communicate using IP addresses. DNS translates a domain name into the correct IP address so a browser knows where to find a website.

## What is a CNAME Record?

A CNAME (Canonical Name) record is a type of DNS record that points one domain name to another domain name instead of directly to an IP address.

For example, when I receive my FlyRank subdomain, it could work like this:

```
fatimaharoon.flyrank.ai
        ↓
      CNAME
        ↓
myportfolio.vercel.app
```

This tells DNS that requests for `fatimaharoon.flyrank.ai` should be directed to my Vercel-hosted website.

## What Happens When Someone Visits My Website?

1. A user types my website address into their browser.
2. The browser asks a DNS resolver to find the website's address.
3. If the resolver has the answer cached, it immediately returns it.
4. Otherwise, the resolver contacts the authoritative nameserver for the domain.
5. The nameserver returns the correct DNS record, such as a CNAME record.
6. The browser follows that record to my hosting provider (Vercel).
7. Vercel serves my website over HTTPS using an automatically managed SSL certificate.
8. The website loads in the user's browser.

## My Future Custom Domain

At the end of the internship, FlyRank will provide me with a subdomain such as:

```
fatimaharoon.flyrank.ai
```

I will add this custom domain in my Vercel project settings. FlyRank will configure the required DNS record, and Vercel will automatically issue an SSL certificate. After the DNS changes propagate, visitors will be able to access my portfolio using the FlyRank subdomain over HTTPS.

## Summary

A custom domain does not move my website to a new server. My website remains hosted on Vercel, while DNS simply directs visitors from the custom domain to the existing hosted site. This makes changing domains a DNS configuration rather than a website migration.