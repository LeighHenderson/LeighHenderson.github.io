---
title: Concepts
description: Learn the concepts behind common laboratory procedures.

permalink: /concepts/
stylesheets: flexbox-gallery
category: navigation
---
# {{ page.title }}
<ul class ="flex-container">
{% for page in site.pages %} 
    {% if page.category == 'concept' %}
      <li class ="flex-item">
        <a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}
        </a>
    </li>
    {% endif %} 
{% endfor %}
</ul>