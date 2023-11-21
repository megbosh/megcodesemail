---
title: 'Email with Animation - Star Wars Inspired Introduction'
description: 'Announcement email for Email Camp 2023: Mission Control'
date: 2023-05-05
---

[Eleventy Fetch](https://www.11ty.dev/docs/plugins/fetch/) fetches and caches resources - at configurable intervals.

This is an example of fetching external data.
In this case, my public repositories (with more than zero stargazer) and a cache duration of 1 day.

Endpoint editable in `_data/github.js.`

{% for repository in github  %}
{% if repository.stargazers_count > 0 %}

## [{{ repository.name }}]({{ repository.html_url }})

{% include 'svg/star.svg' %} {{ repository.stargazers_count }} / {{ repository.description }}

{% endif %}
{% endfor %}
