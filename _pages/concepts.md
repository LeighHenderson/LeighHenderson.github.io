---
title: Concepts
description: Learn the concepts behind common laboratory procedures.

permalink: /concepts/
layout: navigation
category: navigation
---
# Concepts
<ul class ="flex-container">
{% for page in site.pages %} 
    {% if page.category == 'concept' %}
      <li class ="flex-item">
        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}
        </a>
    </li>
    {% endif %} 
{% endfor %}
</ul>