import streamlit as st
import os

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit varsayılan kenar boşluklarını tamamen sıfırlayan CSS
st.markdown("""
    <style>
        .block-container { padding: 0rem !important; }
        iframe { width: 100% !important; height: 100vh !important; border: none !important; }
        #MainMenu, footer, header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

# Sunucunun config.toml dosyasındaki enableStaticServing özelliğini doğrudan 'panel' klasörüne bağlayan nihai yönlendirme
st.components.v1.iframe(src="/ststatic/index.html", height=900, scrolling=True)
