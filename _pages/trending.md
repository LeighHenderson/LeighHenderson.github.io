---
title: Trending

permalink: /trending/
layout: navigation
category: navigation
---
# Trending
<ul class ="flex-container">
{% for page in site.pages %} 
    {% if page.category == 'trending' %}
      <li class ="flex-item">
        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}
        </a>
    </li>
    {% endif %} 
{% endfor %}
</ul>