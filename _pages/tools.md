---
title: Tools

permalink: /tools/
layout: navigation
category: navigation
---
# Tools
<ul class ="flex-container">
{% for page in site.pages %} 
    {% if page.category == 'tool' %}
      <li class ="flex-item">
        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}
        </a>
    </li>
    {% endif %} 
{% endfor %}
</ul>