import streamlit as st
import os

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit'in kendi varsayılan boşluklarını (padding) sıfırlayan CSS tasarımı (Düzeltilen Satır)
st.markdown("""
    <style>
        .reportview-container .main .block-container{ padding-top: 0rem; padding-bottom: 0rem; padding-left: 0rem; padding-right: 0rem; }
        iframe { width: 100% !important; border: none !important; height: 100vh !important; }
        #MainMenu, footer, header {visibility: hidden;}
    </style>
""", unsafe_allow_html=True)

# Mevcut HTML panelinin konumunu belirle
html_path = os.path.join(os.path.dirname(__file__), "panel", "index.html")

# Güncel ve kalıcı olan st.iframe standardı ile uygulamayı tam ekran render et
st.iframe(src="app/panel/index.html", height=1000, scrolling=True)
