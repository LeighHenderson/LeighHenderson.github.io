---
title: Trending

permalink: /trending/
stylesheets: flexbox-gallery
category: navigation
---
# {{ page.title }}
<ul class ="flex-container">
{% for page in site.pages %} 
    {% if page.category == 'trending' %}
      <li class ="flex-item">
        <a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}
        </a>
    </li>
    {% endif %} 
{% endfor %}
</ul>